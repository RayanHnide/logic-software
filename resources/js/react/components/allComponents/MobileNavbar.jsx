import React, {useState} from 'react';
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
import { Turn } from 'hamburger-react'

const MobileNavbar = ({...props}) => {
    const t = props.t;
    const {pathname} = useLocation()
    const {scroll} = useLocomotiveScroll()
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (v) => {
        setIsOpen(v)
        document.body.style.overflow = v ? 'hidden' : 'unset'
        if (v) {
            scroll.stop();
        } else {
            scroll.start();
        }
    }

    return (
        <div data-scroll-section data-scroll={isOpen ? "false" : "true"} className={`d-flex mobile-parent-nav justify-content-between ${isOpen ? 'open' : ''}`} >
            <div className="p-3 logo-mobile" onClick={(e) => {
                e.preventDefault();
                nav("/")
            }} > <img width="100px" src={Logo} alt=""/></div>

            <div className="p-3 mobile-nav-icon">
                <Turn duration={0.8} toggled={isOpen} color={isOpen ? "black" : "white"} onToggle={(v) => toggleOpen(v)} size={22} />
            </div>

            <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
                <div className="d-flex flex-column justify-content-center h-100 gap-5 mx-3">
                    <div className='d-inline-flex p-3 langz justify-content-center'>
                        <NavDropdown dir="ltr" title={<img style={{filter: "invert(100%)"}} src={language} alt=""/>} color='black'>
                            <NavDropdown.Item onClick={() => {
                                toggleOpen(false)
                                tools.translations.changeLanguage("ar")
                            }}>
                                <img style={{width: '30%'}} src={ar} alt=""/>
                                <span className='mx-3'>العربية</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                toggleOpen(false)
                                tools.translations.changeLanguage("en")
                            }}>
                                <img style={{width: '30%'}} src={en} alt=""/>
                                <span className='mx-3'>English</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    {t("Links", {returnObjects: true}).map((l, i) => {
                        const active = pathname === l.path;
                        if (l.path.includes("#")) {
                            return <div onClick={() => {
                                toggleOpen(false)
                                if (pathname === "/") {
                                    scroll.scrollTo("#services", {
                                        duration: 1000,
                                        easing: [0.5, 0.6, 0.8, 1],
                                        offset: -50,
                                    })
                                } else {
                                    nav("/", {state: "#services"})
                                }
                            }} key={l.label} className={`m-0 px-4 Link nav-items`}
                                        style={{color: active ? "#EA37A3!important" : "#fff", cursor: "pointer"}}>
                                <div>{l.label} <img className='px-2'
                                                    src={icon}
                                                    alt="nav-icon"/>
                                </div>
                            </div>
                        }
                        return (
                            <div className="nav-items" key={l.label}>
                                <Link onClick={() => toggleOpen(false)} style={{color: active ? "#EA37A3" : "#fff"}} className={`m-4 Link`}
                                      to={l.path}>{l.label} <img className='px-2'
                                                                 src={icon}
                                                                 alt="nav-icon"/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="half-logo"></div>
            </div>



        </div>
    );
};

export default withTranslation("general")(MobileNavbar);
