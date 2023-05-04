import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import SingleChef from "../pages/SingleChef/SingleChef";

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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chef/:id',
                element: <SingleChef></SingleChef>,
                loader: ({ params }) => fetch(`https://best-recipe-server-mdashraful.vercel.app/chef/${params.id}`)
            }
        ]
    }
]);

export default router;