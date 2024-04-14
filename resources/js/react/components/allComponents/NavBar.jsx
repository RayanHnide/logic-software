import React from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import DesktopNavbar from "./DesktopNavbar.jsx";

const NavBar = () => {
    const { width } = useWindowDimensions();
    if (width < 950) {
        return <MobileNavbar />
    }
    return (
        <DesktopNavbar />
    );
};

export default NavBar;
