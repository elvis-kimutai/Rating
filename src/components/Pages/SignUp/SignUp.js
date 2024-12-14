import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import image from "../../../assets/images/register.jpg";

const SignUp = () => {
  const { signupUser, googleSignIn, updateUserProfile, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signupUser(email, password);
      await handleUpdateUserProfile(name);
      toast.success("Sign up successful!");
      form.reset();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "An error occurred.");
      console.error("Signup Error:", err.message);
    }
  };

  const socialSignIn = async () => {
    try {
      const result = await googleSignIn();
      setLoading(false);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "An error occurred during Google Sign-In.");
      console.error("Google Sign-In Error:", err.message);
    }
  };

  const handleUpdateUserProfile = async (name) => {
    const profile = { displayName: name };
    try {
      await updateUserProfile(profile);
    } catch (err) {
      setError(err.message || "An error occurred while updating the profile.");
      console.error("Update Profile Error:", err.message);
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center my-16 mx-5">
      <div className="w-full md:w-6/12">
        <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body form pb-5">
            <h2 className="font-bold color-red text-center mb-4">Create an account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn" value="Sign Up" />
              <Toaster />
            </div>
            {error && (
              <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
              </div>
            )}
          </form>
          <div className="flex justify-center mb-5">
            <button onClick={socialSignIn} className="social-login ml-3 flex items-center">
              <FcGoogle className="mr-3" />
              Continue with Google
              <Toaster />
            </button>
          </div>
          <div className="mx-auto mb-5">
            <p>
              Already have an account? <Link to="/login" className="color-red">Login here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <img src={image} alt="Register Illustration" />
      </div>
    </div>
  );
};

export default SignUp;
