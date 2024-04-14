import React from 'react';
import useLatestWorkSource from "../../hooks/useLatestWorkSource.jsx";
import Loading from "../../components/allComponents/Loading.jsx";
import LatestWorkCard from "../../components/PortfolioComponent/LatesWorkCard.jsx";
import {withTranslation} from "react-i18next";

const AllLatestWork = ({...props}) => {
    const t = props.t;
    const {data, loading} = useLatestWorkSource();
    if (loading) {
        return <Loading fullScreen />
    }
    return (
        <>
            <h3 className="mb-5 text-decoration-underline">
                {t("latestWork.allWork")}
            </h3>
            <div className='container d-flex flex-wrap mb-5'>
                {data.map((l, i)=>{
                    return(
                        <div key={`${l.slug}-${i}`} className='col-md-6 col-lg-4'>
                            <LatestWorkCard latestWork={l} customPath={`/dashboard/latest-work/${l.slug}/edit`} />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default withTranslation("dashboard")(AllLatestWork);
