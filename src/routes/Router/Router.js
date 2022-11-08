import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Services from "../../components/Pages/Services/Services/Services";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../layout/Main";

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
    }
])


export default Router;