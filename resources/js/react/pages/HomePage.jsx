import React, {useEffect} from 'react';
import Portfolio from "../containers/Portfolio.jsx";
import CustomerReviews from "../containers/Customer Reviews.jsx";
import Services from "../containers/Services.jsx";
import ClientTrust from "../containers/ClientTrust.jsx";
import ContactUs from "../components/HomePageComponent/ContactUs.jsx";
import TopSection from "../containers/TopSection.jsx";
import {useLocation} from "react-router-dom";
import {useLocomotiveScroll} from "react-locomotive-scroll";

const HomePage = () => {
    const {scroll, isReady} = useLocomotiveScroll()
    const {state} = useLocation();
    useEffect(() => {
        if (state && scroll && isReady) {
            setTimeout(() => {
                scroll.scrollTo(state,{
                    duration: 1000,
                    easing: [0.5, 0.6, 0.8,1],
                    offset: -50
                })
                window.history.replaceState({}, '')

            }, 500)
        }
    }, [state, isReady]);
    return (
        <>
            <TopSection />
            <Portfolio/>
            <CustomerReviews/>
            <Services/>
            <ClientTrust/>
            <ContactUs/>
        </>
    )
}

export default HomePage;
