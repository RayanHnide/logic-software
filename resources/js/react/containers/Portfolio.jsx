import React from 'react';
import PortfolioCardComponent from "../components/HomePageComponent/PortfolioCardComponent.jsx";
import labtop from '../../../assets/labtop.png'
import watch from '../../../assets/watch.png'
import labtop2 from '../../../assets/labtop2.png'
import option from '../../../assets/option.png'

import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Portfolio = ({t}) => {
    const style = {
        background: "var(--linearBG)",
        borderRadius: "100px",
        padding: '10px',
        margin: '20px',
        color: 'white',
        border: 'none'
    }
    return (
        <div data-scroll-section className="mt-5">
            <div className='container fw-bold  mt-5 responsive-font text-white'>
                {t("portfolioTitle")}
            </div>

            <div className='row mx-0 justify-content-center'>
                <div className='col-md-4'>
                    <PortfolioCardComponent btnTitle={t("portfolio.btn1Title")} btnLink={t("portfolio.btn1Link")}
                                            description={t("portfolio.descriptionFirstProject")}
                                            title={t("portfolio.titleFirstProject")} img={labtop}/>
                    <PortfolioCardComponent isDarkButton btnTitle={t("portfolio.btn2Title")} btnLink={t("portfolio.btn2Link")}
                                            description={t("portfolio.descriptionSecondProject")}
                                            title={t("portfolio.titleSecondProject")} img={option}/>
                </div>

                <div className='col-md-4'>
                    <PortfolioCardComponent isDarkButton btnTitle={t("portfolio.btn3Title")} btnLink={t("portfolio.btn3Link")}
                                            description={t("portfolio.descriptionThirdsProject")}
                                            title={t("portfolio.titleThirdProject")} img={watch}/>
                    <PortfolioCardComponent btnTitle={t("portfolio.btn4Title")}
                                            btnLink={t("portfolio.btn4Link")}
                                            description={t("portfolio.descriptionFourthProject")}
                                            title={t("portfolio.titleFourthProject")} img={labtop2}/>
                </div>
            </div>

            <div className='container d-flex justify-content-lg-end  justify-content-center mt-5'>
                <Link to="/portfolio" className='responsive-btn contact-btn widthNone-100 text-center text-decoration-none' style={style}>{t("ViewMore")}</Link>
            </div>


        </div>
    );
};

export default withTranslation("home")(Portfolio);
