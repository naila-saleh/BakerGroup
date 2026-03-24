import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import CategoriesPage from "./pages/categories/CategoriesPage.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },{
                path: 'cart',
                element:
                    <ProtectedRouter>
                        <Cart />
                    </ProtectedRouter>
            },{
                path: 'products/:id',
                element: <ProductDetails />
            },{
                path: 'categories',
                element: <CategoriesPage />
            }
        ]
    },{
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },{
                path: 'register',
                element: <Register />
            }
        ]
    }
]);
export default router;