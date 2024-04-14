import React from 'react';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import person from '../../../../assets/Ellipse 35.png'
import ReactStars from "react-rating-stars-component";
import RoundAvatar from "../allComponents/RoundAvatar.jsx";
import {withTranslation} from "react-i18next";
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";
const CustomerReviewSlider = ({data = [], ...props}) => {
    const t = props.t;
    const {width} = useWindowDimensions();
    let size = width * 0.097674419;
    let starSize = width * 0.023;
    if (width <= 420) {
        size = width * 0.17;
        starSize = width * 0.033;
    }
    return (
        <div className='customer-review'>
            <Splide options={{
                perPage: 1,
                perMove: 1,
                type: "loop",
                padding: "20%",
                trimSpace: true,
                pagination:false,
                arrowPath: "none",
                updateOnMove: true,
                cover: true,
                start: 1,
                snap: true,
                focus: "center"
            }} dir="ltr" aria-label="Customer Reviews"  >
                {
                    data.map((r,i)=>{
                        return(
                            <SplideSlide key={i}>
                                <div className='inner position-relative'>
                                    <div style={{paddingTop: `${size/2}px`}}>
                                        <div className='slide-card pb-3 px-3  text-white '>
                                            <div style={{top: `${-size/2}px`, left: 0, right: 0}} className='position-absolute d-flex justify-content-center'>
                                                <RoundAvatar size={`${size}px`} src={r.photo} />
                                            </div>
                                            <div style={{paddingTop: `${size/2}px`}} className="d-flex justify-content-center">
                                                <ReactStars
                                                    count={5}
                                                    value={r.rating}
                                                    edit={false}
                                                    size={starSize}
                                                    activeColor="#ffb800"
                                                />
                                            </div>
                                            <h4 className='text-center mt-3 fw-light overflow-auto review-slide-comment' >
                                                {r.comment?.length > 0 ? r.comment : t("hasNoComment")}
                                            </h4>
                                            <h2 className='text-center review-slide-comment-by my-3'>
                                                {r.clientName}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                            </SplideSlide>
                        )
                    })
                }

            </Splide>
        </div>
    );
};

export default withTranslation("home")(CustomerReviewSlider);
