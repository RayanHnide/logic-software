// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import person from '../../../../assets/Ellipse 35.png'
// import ReactStars from "react-rating-stars-component";
// import RoundAvatar from "../allComponents/RoundAvatar.jsx";
// import {withTranslation} from "react-i18next";
// const CustomerReviewSlider = ({data = [], ...props}) => {
//     const t = props.t;
//     return (
//         <div className='container'>
//             <Splide dir="ltr" aria-label="Customer Reviews"  >
//                 {
//                     data.map((r,i)=>{
//                         return(
//                             <SplideSlide key={i} className='position-relative d-flex justify-content-center'>
//                                 <div className="responsiveSlide" style={{paddingTop: "60px"}}>
//                                     <div className='slide-card pb-3 px-3  text-white '>
//                                         <div style={{top: "-60px", left: 0, right: 0}} className='position-absolute d-flex justify-content-center'>
//                                             <RoundAvatar src={r.photo} />
//                                         </div>
//                                         <div style={{paddingTop: "90px"}} className="d-flex justify-content-center">
//                                             <ReactStars
//                                                 count={5}
//                                                 value={r.rating}
//                                                 edit={false}
//                                                 size={32}
//                                                 activeColor="#ffb800"
//                                             />
//                                         </div>
//                                         <h4 className='text-center mt-3 mb-5 fw-light' style={{lineHeight:'40px'}}>
//                                             {r.comment?.length > 0 ? r.comment : t("hasNoComment")}
//                                         </h4>
//                                         <h2 className='text-center mb-5 mt-3'>
//                                             {r.clientName}
//                                         </h2>
//                                     </div>
//                                 </div>
//
//                             </SplideSlide>
//                         )
//                     })
//                 }
//
//             </Splide>
//         </div>
//     );
// };
//
// export default withTranslation("home")(CustomerReviewSlider);
