import React, {useEffect} from 'react';
import {ToastContainer} from "react-toastify";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import LatestWorkDetailsPage from "./pages/LatestWorkDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashLayout from "./layouts/DashLayout.jsx";
import DashboardIndex from "./pages/dashboard/index.jsx";
import i18n from "./translations/i18n.js";
import ContactUs from "./components/HomePageComponent/ContactUs.jsx";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/*" element={<RootLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='contact-us' element={<ContactUs newPage/>}/>
                <Route path='portfolio' element={<PortfolioPage/>}/>
                <Route path="portfolio/:slug/details" element={<LatestWorkDetailsPage/>}/>
                <Route path='admin-login' element={<LoginPage/>}/>
            </Route>
            <Route path="/dashboard/*" element={<DashLayout/>}>
                <Route path="*" element={<DashboardIndex/>}/>
            </Route>
        </Route>
    )
)

const App = () => {
    useEffect(() => {
        document.documentElement.dir = i18n.dir();
    }, [i18n, i18n.language]);
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RouterProvider router={routes}/>
        </div>
    );
};

export default App;
