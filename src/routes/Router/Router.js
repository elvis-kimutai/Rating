import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Services from "../../components/Pages/Services/Services/Services";
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
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
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