import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home/Home";
import Services from "../../components/Pages/Services/Services/Services";
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
            }
        ]
    }
])


export default Router;