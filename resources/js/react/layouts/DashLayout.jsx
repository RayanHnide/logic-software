import React from 'react';
import Navbar from "../components/allComponents/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/allComponents/Sidebar.jsx";

const DashLayout = () => {
    return (
        <div className='dashboard-layout'>
            <Navbar/>
            <Sidebar />
            <div className="m-5">
                <div className="px-5 mx-md-5 text-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashLayout;
