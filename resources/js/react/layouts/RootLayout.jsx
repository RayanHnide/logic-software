import React, {useEffect} from 'react';
import Navbar from "../components/allComponents/NavBar.jsx";
import Footer from "../components/allComponents/Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";

const RootLayout = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        if (pathname === "/") {
            if (!document.body.classList.contains("first-landing-page")) {
                document.body.classList.add("first-landing-page");
            }
        } else {
            document.body.classList.remove("first-landing-page")
        }
    }, [pathname]);
    return (
        <div className='main-home-page'>
            <Navbar/>
            <div style={{minHeight: "100vh"}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;
