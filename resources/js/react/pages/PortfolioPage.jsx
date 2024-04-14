import React from 'react';
import LatestWorkCard from "../components/PortfolioComponent/LatesWorkCard.jsx";
import {withTranslation} from "react-i18next";
import useLatestWorkSource from "../hooks/useLatestWorkSource.jsx";
import Loading from "../components/allComponents/Loading.jsx";

const PortfolioPage = ({t}) => {
    const {data, loading} = useLatestWorkSource();
    return (
        <div className="overflow-hidden pb-5" data-scroll-section>
            <div className='my-5 pt-5 container'>
                <div className='fw-bolder fs-1 mt-5 responsive-font text-white text-center'>
                    {t("header.title")}
                </div>
                <div className="d-flex justify-content-center">
                    <p className='text-white gradient-width mt-3'>
                        {t("header.subTitle")}
                    </p>
                </div>
            </div>
            <div className='container d-flex flex-wrap mb-5'>
                {
                    loading ? <Loading fullScreen/> :
                        data.map((l, i) => {
                            return (
                                <div key={`${l.slug}-${i}`} className='col-lg-6'>
                                    <LatestWorkCard latestWork={l}/>
                                </div>
                            )
                        })}
            </div>

        </div>
    );
};

export default withTranslation("portfolio")(PortfolioPage);
