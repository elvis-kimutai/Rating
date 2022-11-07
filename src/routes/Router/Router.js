import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home/Home/Home";
import Main from "../../layout/Main";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])


export default Router;