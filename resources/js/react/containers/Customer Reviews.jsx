import React from 'react';
import CustomerReviewSlider from "../components/HomePageComponent/CustomerReviewSlider.jsx";
import {withTranslation} from "react-i18next";
import ReviewDialog from "../components/allComponents/ReviewDialog.jsx";
import useReviewsSource from "../hooks/useReviewsSource.jsx";
import Loading from "../components/allComponents/Loading.jsx";

const CustomerReviews = ({t}) => {
    const {data, loading, refresh} = useReviewsSource()
    return (
        <div className="home-section-2" data-scroll-section>
            {
                loading ? <Loading /> :
                    <>
                        <div className='container fw-bold  fs-2 text-center mt-5 mb-5 responsive-font text-white'>
                            {t("reviewsTitle")}
                        </div>
                        {
                            !data ? <>

                            </> : <CustomerReviewSlider data={data} />
                        }
                        <ReviewDialog onDone={refresh} t={t}/>
                    </>
            }
        </div>
    );
};

export default withTranslation("home") (CustomerReviews);
