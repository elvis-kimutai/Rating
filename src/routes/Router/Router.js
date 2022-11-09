import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home/Home";
import HomeServices from "../../components/Pages/Home/HomeServices/HomeServices";
import Login from "../../components/Pages/Login/Login";
import Services from "../../components/Pages/Services/Services/Services";
import ServiceSingle from "../../components/Pages/Services/SeviceSingle/ServiceSingle";
import SignUp from "../../components/Pages/SignUp/SignUp";
import AddService from "../../components/Pages/User/AddService/AddService";
import ReviewCollection from "../../components/Pages/User/ReviewCollection/ReviewCollection";
import EditProfile from "../../components/Pages/User/SidebarProfile/EditProfile/EditProfile";
import NotFoundPage from "../../components/Shared/NotFoundPage/NotFoundPage";
import Main from "../../layout/Main";
import User from "../../layout/User";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: async ()=> fetch('http://localhost:5000/homeservices'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: async ()=> fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:_id',
                loader: async({params})=>fetch(`http://localhost:5000/services/${params._id}`),
                element: <ServiceSingle></ServiceSingle>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/',
        element: <User></User>,
        children: [
            {
                path: '/edit-profile',
                element: <EditProfile></EditProfile>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/my-reviews',
                element: <ReviewCollection></ReviewCollection>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])


export default Router;