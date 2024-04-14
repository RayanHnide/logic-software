import React from 'react';
import {CDBBox} from "cdbreact";
import logo from "../../../../assets/logo.svg";
import {Link} from "react-router-dom";
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {withTranslation} from "react-i18next";

const Footer = ({t}) => {
    return (
        <footer className="footer mt-5 pt-5" data-scroll-section>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <a href="/" className="p-0 text-dark">
                            <img
                                className="p-5 p-lg-0"
                                src={logo}
                                alt="logo"
                                width="90%"
                            />
                        </a>
                    </div>
                    <div className="col-6 col-lg-4 d-flex justify-content-center">
                        <div>
                            <p className="h5 mb-4 links" style={{
                                fontWeight: '600',
                            }}>
                                {t("footer.links")}
                            </p>
                            <CDBBox flex="column" display="flex" style={{cursor: 'pointer', padding: '0'}}>
                                <div>
                                    {t("Links", {returnObjects: true}).map((e, i) => {
                                        return (
                                            <div key={i} className='mt-2'><Link className='Link text-white'
                                                                                to={e.path}>{e.label}</Link></div>
                                        )
                                    })}

                                </div>
                            </CDBBox>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 d-flex justify-content-center">
                        <div>
                            <p className="h5 mb-4 links" style={{fontWeight: '600'}}>
                                {t("footer.contactUs")}
                            </p>

                            <CDBBox display="flex" flex="column" style={{cursor: 'pointer', padding: '0'}}>
                                <Link className="no-decoration social-link d-flex" to={t("socialLinks.facebook")}
                                      target="_blank">
                                    <BsFacebook style={{color: 'white', fontSize: '24px'}}/>
                                    <span className='text-white px-2'>Facebook</span>
                                </Link>
                                <Link className='my-4 no-decoration social-link d-flex' to={t("socialLinks.instagram")}
                                      target="_blank">
                                    <BsInstagram style={{color: 'white', fontSize: '24px'}}/>
                                    <span className='text-white px-2'>Instagram</span>
                                </Link>
                                <Link className="no-decoration social-link d-flex" to={t("socialLinks.linkedIn")}
                                      target="_blank">
                                    <BsLinkedin style={{color: 'white', fontSize: '24px'}}/>
                                    <span className='text-white px-2'>Linked In</span>
                                </Link>
                            </CDBBox>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-5" style={{color: 'white'}}/>
            <CDBBox display="flex" className="mt-3 pt-3 pb-4 d-flex justify-content-center">
                <small className="text-white">{t("footer.copyright")}</small>
            </CDBBox>
        </footer>
    );
};

export default withTranslation("general")(Footer);
