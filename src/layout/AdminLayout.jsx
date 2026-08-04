import ScrollToTop from "../components/ScrollToTop.jsx";
import Sidebar from "../components/adminSidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
    return (
        <>
            <ScrollToTop />
            <Sidebar>
                <Outlet />
            </Sidebar>
        </>
    )
}
