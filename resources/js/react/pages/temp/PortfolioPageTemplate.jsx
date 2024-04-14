import React from 'react';
import {withTranslation} from "react-i18next";
import LatestWorkCardTEMP from "../../components/PortfolioComponent/temp/LatesWorkCardTEMP.jsx";

const PortfolioPageTemplate = ({t}) => {
    return (
        <>
            <div className= 'text-start mb-3 container text-center'    >
                <div  className='fw-bolder fs-1 mt-5 responsive-font text-white'>
                    Our Latest work!
                </div>
                <p className='text-white text-center mt-3'>
                    Discover our freshest creations that showcase the power of design <br/> innovation and digital excellence. Explore our latest work and <br/> witness the impact we bring to every project.
                </p>
            </div>
            <div className='container  d-flex flex-wrap justify-content-between'>
                {t("portfolio",{returnObjects:true}).map((e)=>{
                    return(
                        <>
                            <div className='col-lg-6'>
                                <LatestWorkCardTEMP path={e.path} description={e.description} title={e.title} img={new URL(e.img,import.meta.url).href} subTitle={e.subTitle}/>

                            </div>
                        </>
                    )
                })}

            </div>
          </>
    );
};

export default withTranslation("portfolio") (PortfolioPageTemplate);
