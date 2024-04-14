import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useLocomotiveScroll} from "react-locomotive-scroll";
import Logo from "../../../../assets/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import language from "../../../../assets/iconoir_language.png";
import tools from "../../utils/tools.js";
import ar from "../../../../assets/ar.png";
import en from "../../../../assets/en.png";
import icon from "../../../../assets/icon.svg";
import {withTranslation} from "react-i18next";

const DesktopNavbar = ({...props}) => {
    const t = props.t;
    const {pathname} = useLocation()
    const {scroll} = useLocomotiveScroll()
    const nav = useNavigate();
    return (
        <div style={{right:0, left: 0}} className="blur position-absolute d-flex navbar-home z-3" >

            <div style={{zIndex: "5", position: "absolute", cursor: "pointer"}} className="p-3" onClick={(e) => {
                e.preventDefault();
                nav("/")
            }} > <img height="50px" src={Logo} alt=""/></div>

            <div className='d-flex flex-grow-1 justify-content-center'>

                <div className="nav-items">
                    <div className='d-inline-flex p-3 langz justify-content-center'>
                        <NavDropdown dir="ltr" title={<img src={language} alt=""/>} color='white'>
                            <NavDropdown.Item onClick={() => {
                                tools.translations.changeLanguage("ar")
                            }}>
                                <img style={{width: '30%'}} src={ar} alt=""/>
                                <span className='mx-3'>العربية</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                tools.translations.changeLanguage("en")
                            }}>
                                <img style={{width: '30%'}} src={en} alt=""/>
                                <span className='mx-3'>English</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    <Link style={{color: pathname === "/" ? "#EA37A3" : "#fff"}} className={`p-4 Link d-inline-block`}
                          to="/">{t("Links", {returnObjects: true})[0].label} <img className='px-2'
                                                                                   src={icon}
                                                                                   alt="nav-icon"/>
                    </Link>
                    <Link style={{color: pathname === "/portfolio" ? "#EA37A3" : "#fff"}} className={`p-4 Link d-inline-block`}
                          to="/portfolio">{t("Links", {returnObjects: true})[1].label} <img className='px-2'
                                                                                            src={icon}
                                                                                            alt="nav-icon"/>
                    </Link>

                    <a className="p-4 px-4 Link d-inline-block" style={{color: "#fff", cursor: "pointer"}} onClick={() => {
                        if (pathname === "/") {
                            scroll.scrollTo("#services", {
                                duration: 1000,
                                easing: [0.5, 0.6, 0.8, 1],
                                offset: -50,
                            })
                        } else {
                            nav("/", {state: "#services"})
                        }
                    }} >{t("Links", {returnObjects: true})[2].label} <img className='px-2'
                                                                          src={icon}
                                                                          alt="nav-icon"/>
                    </a>
                </div>
                <div className="nav-contact p-4">
                    <Link style={{color: pathname === "/contact-us" ? "#EA37A3" : "#fff"}} className={`Link`}
                          to="/contact-us">{t("Links", {returnObjects: true})[3].label} <img className='px-2'
                                                                                             src={icon}
                                                                                             alt="nav-icon"/>
                    </Link>
                </div>

            </div>



        </div>
    );
};

export default withTranslation("general")(DesktopNavbar);
