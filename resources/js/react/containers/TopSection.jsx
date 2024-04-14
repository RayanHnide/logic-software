import React, {useState} from 'react';
import {withTranslation} from "react-i18next";
import {useLocomotiveScroll} from "react-locomotive-scroll";
import AnimatedLogo from "../components/allComponents/AnimatedLogo.jsx";
import useWindowDimensions from "../hooks/useWindowDimensions.jsx";

const TopSection = ({...props}) => {
    const {scroll} = useLocomotiveScroll()
    const {width} = useWindowDimensions();
    const t = props.t;
    return (
        <div className="pt-5" style={{overflow:"hidden"}} data-scroll-section >
            <div className="logo-side my-5">
                <div className='container d-flex position-relative justify-content-between px-5 pt-5 mb-5'>
                    <div className="top-paragraph">
                        <div className='mt-lg-5 mb-3 text-white responsive-title-font title-font' style={{fontWeight: '900'}}>
                            {t("title").split(";").map(l => <div key={l}>{l}<br/></div>)}
                        </div>
                        <button className="top-section-btn shine" onClick={() => {
                            scroll.scrollTo("#contact-us",{
                                duration: 50000,
                                easing: [0.5, 0.6, 0.8,1],
                                offset: -50,
                            })
                        }}>
                            {t("btn")}
                        </button>
                    </div>
                </div>
                <div className="logo-left-side"></div>
                <div className="logo-right-side"></div>
                <div className="logo-mini-white"></div>
                <div className="logo-mini-white-extra"></div>
                <AnimatedLogo />

            </div>
            { width > 950 && <div style={{height: "65vh", width: "100%"}}></div> }
        </div>
    )
};

export default withTranslation("home")(TopSection);
