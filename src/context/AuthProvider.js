import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up a user
  const signupUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Signup Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log in a user
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const googleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (profile) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, profile);
    } catch (error) {
      console.error("Update Profile Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out a user
  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign Out Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Monitor user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    signupUser,
    loginUser,
    googleSignIn,
    updateUserProfile,
    signOutUser,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
