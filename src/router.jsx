import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import CategoriesPage from "./pages/categories/CategoriesPage.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ProfileInfo from "./pages/profile/ProfileInfo.jsx";
import ProfileOrders from "./pages/profile/ProfileOrders.jsx";
import ForgotPassword from "./pages/auth/login/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/login/ResetPassword.jsx";
import ProductsByCategory from "./components/products/ProductsByCategory.jsx";
import ProductsPage from "./pages/products/ProductsPage.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import Hero from "./components/adminHero/Hero.jsx";
import Products from "./pages/adminProducts/Products.jsx";
import AddProduct from "./pages/adminProducts/AddProduct.jsx";
import AdminProductDetails from "./pages/adminProducts/ProductDetails.jsx";
import UpdateProduct from "./pages/adminProducts/UpdateProduct.jsx";

const router = createBrowserRouter([
    // legacy /login redirect -> new /auth/login
    {
        path: '/login',
        element: <Navigate to={'/auth/login'} replace />
    },
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
                path: 'checkout',
                element:
                    <ProtectedRouter>
                        <Checkout />
                    </ProtectedRouter>
            },{
                path: 'profile',
                element:
                    <ProtectedRouter>
                        <Profile />
                    </ProtectedRouter>,
                children: [
                    {
                        index: true,
                        element: <ProfileInfo />
                    },{
                        path: 'orders',
                        element: <ProfileOrders />
                    }
                ]
            },{
                path: 'products',
                element: <ProductsPage />
            },{
                path: 'products/:id',
                element: <ProductDetails />
            },{
                path: 'categories',
                element: <CategoriesPage />
            },{
                path: 'products/category/:id',
                element: <ProductsByCategory />
            },{
                path: 'contactUs',
                element: <ContactUs />
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
            },{
                path: 'forgot-password',
                element: <ForgotPassword />
            },{
                path: 'reset-password/:email',
                element: <ResetPassword />
            }
        ]
    },{
        path: '/admin',
        element: <ProtectedRouter><AdminLayout /></ProtectedRouter>,
        children: [
            {
                index: true,
                element: <Hero />
            },{
                path: 'products',
                element: <Products />
            },{
                path: 'products/new',
                element: <AddProduct />
            },{
                path: 'products/:id',
                element: <AdminProductDetails />
            },{
                path: 'products/:id/edit',
                element: <UpdateProduct />
            },{
                path: 'categories',
                element: <div>Categories</div>
            },{
                path: 'users',
                element: <div>Users</div>
            },{
                path: 'reviews',
                element: <div>Reviews</div>
            }
        ]
    }
]);
export default router;
