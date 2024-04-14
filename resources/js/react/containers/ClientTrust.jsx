import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import client4 from "../../../assets/smartrecruiters.png";
import client5 from "../../../assets/olera.png";
import client2 from "../../../assets/rare-assembly 1.png";
import client1 from "../../../assets/yanmar 1.png";
// import client3 from "../../../assets/Clip path group.png";
import {withTranslation} from "react-i18next";

const ClientTrust = ({...props}) => {
    const t = props.t;
    const data = [client4, client5, client2, client1]
    return (
        <div className="pt-5" data-scroll-section>
            <div className='container fw-bold  fs-2 text-center mb-5 responsive-font text-white'>
                {t("clientWhoTrustUs")}
            </div>
            <div className='pt-2'>
                <div>
                    <Splide dir="ltr" options={
                        {
                            autoplay: true,
                            perPage: 3,
                            perMove: 1,
                            type: "loop",
                            pagination: false,
                            arrowPath: "none",
                            updateOnMove: true,
                            cover: true,
                            start: 1,
                            snap: true,
                            focus: "center",
                            breakpoints: {
                                950: {perPage: 2, gap: 20},
                                420: {perPage: 1},
                            }
                        }
                    } aria-label="My Favorite Images">
                        {
                            data.map((e, i) => {
                                return (
                                    <SplideSlide>
                                        <div className='slide-image d-flex justify-content-center'>
                                            <img src={e}
                                                 alt=""/>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default withTranslation("home")(ClientTrust);
