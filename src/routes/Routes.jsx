import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://best-recipe-server-mdashraful.vercel.app/chefs`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;