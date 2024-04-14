import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import AllLatestWork from "./AllLatestWork.jsx";
import {AuthHelper} from "../../utils/AuthHelper.ts";
import Loading from "../../components/allComponents/Loading.jsx";
import AddLatestWork from "./AddLatestWork.jsx";
import EditLatestWork from "./EditLatestWork.jsx";

const DashboardIndex = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        if (!AuthHelper.token()) {
            nav("/admin-login", {replace: true})
        }
        setLoading(false)
    }, []);
    if (loading) {
        return <Loading fullScreen />
    }
    return (
        <div data-scroll-section>
            <Routes>
                <Route index element={<AllLatestWork/>} />
                <Route path="latest-work/add" element={<AddLatestWork />} />
                <Route path="latest-work/:slug/edit" element={<EditLatestWork />} />
            </Routes>
        </div>
    );
};

export default DashboardIndex;
