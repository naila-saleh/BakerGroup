import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import NavbarResponsiveMenu from "../components/navbar/NavbarResponsiveMenu.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <NavbarResponsiveMenu />
            <Outlet />
            <Footer />
        </>
    )
}
