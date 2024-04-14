import React from 'react';
 import ServicesComponent from "../components/HomePageComponent/ServicesComponent.jsx";

import {withTranslation} from "react-i18next";
import useWindowDimensions from "../hooks/useWindowDimensions.jsx";

const Services = ({t}) => {
    const {width} = useWindowDimensions();
    let alignImage = "start";
    if (width <= 950) {
        alignImage = "center"
    }
    return (
        <section className="home-section" data-scroll-section id="services">
            <div className='container fw-bold  fs-1 text-center mt-5 mb-5 responsive-font text-white ' id='services'>
                {t("servicesTitle")}
            </div>

              <div className='container mb-5'>
                  <div className='row mx-0 justify-content-center ' >
                      <div className='col-lg-4 d-flex flex-column'>
                          <ServicesComponent centerImage={alignImage} isCenterImg={false} description={t("Services.des1")} title={t("Services.title1")}/>
                          <ServicesComponent  centerImage={alignImage}  isImage={false} description={t("Services.des2")} title={t("Services.title2")}/>
                      </div>
                      <div className='col-lg-4 d-flex align-items-center' >
                          <ServicesComponent isCenterImg titleSize="large" isCenterCard={false} description={t("Services.des3")} title={t("Services.title3")}   />
                      </div>
                      <div className='col-lg-4 d-flex flex-column'>
                          <ServicesComponent  centerImage={alignImage}  isImage={false} description={t("Services.des4")} title={t("Services.title4")}/>
                          <ServicesComponent centerImage={alignImage} isCenterImg={false} description={t("Services.des5")} title={t("Services.title5")}/>
                      </div>
                  </div>
              </div>
        </section>
    );
};

export default withTranslation("home")(Services);
