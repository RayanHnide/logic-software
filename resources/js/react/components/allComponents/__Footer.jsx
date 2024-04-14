// import React from 'react';
// import {CDBBox} from "cdbreact";
// import logo from "../../../../assets/LOGO.png";
// import {Link} from "react-router-dom";
// import {FaFacebookF} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa6";
// import {RiLinkedinFill} from "react-icons/ri";
// import {withTranslation} from "react-i18next";
//
// const Footer = ({t}) => {
//     return (
//         <footer className="footer" data-scroll-section>
//             <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%'  }}>
//                 <CDBBox display="flex" justifyContent="between" className="flex-wrap">
//                     <CDBBox className='  w-75 mx-5 '>
//                         <a href="/" className="d-flex align-items-center p-0 text-dark">
//                             <img
//                                 src={logo}
//                                 alt="logo"
//                                 width={200}
//                             />
//                         </a>
//                     </CDBBox>
//                     <CDBBox display="flex flex-wrap mt-4" style={{ width: '100%' }} justifyContent="around">
//                       <div className='d-flex justify-content-center '>
//                           <CDBBox >
//                               <p className="h5 mb-4 links" style={{ fontWeight: '600',
//                               }}>
//                                   {t("footer.links")}
//                               </p>
//                               <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
//                                   <div  >
//                                       {t("Links", {returnObjects: true}).map((e,i)=>{
//                                           return(
//                                               <div key={i} className='mt-2'> <Link className='Link text-white' to={e.path}>{e.label}</Link></div>
//                                           )
//                                       })}
//
//                                   </div>
//                               </CDBBox>
//                           </CDBBox>
//                       </div>
//                         <CDBBox>
//                             <p className="h5 mb-4 links" style={{ fontWeight: '600' }}>
//                                 {t("footer.contactUs")}
//                             </p>
//
//                             <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//                                 <Link className="no-decoration social-link" to={t("socialLinks.facebook")} target="_blank">
//                                     <FaFacebookF className='mt-2' style={{color:'white',fontSize:'30px'}}/>
//                                     <span className='text-white p-2'>Facebook</span>
//                                 </Link>
//                                 <Link className='my-4 no-decoration social-link' to={t("socialLinks.instagram")} target="_blank" >
//                                     <FaInstagram style={{color:'white',fontSize:'28px'}}/>
//                                     <span className='text-white p-2'>Instagram</span>
//                                 </Link>
//                                 <Link className="no-decoration social-link" to={t("socialLinks.linkedIn")} target="_blank" >
//                                     <RiLinkedinFill style={{color:'white',fontSize:'30px'}}/>
//                                     <span className='text-white p-2'>Linked In</span>
//                                 </Link>
//                             </CDBBox>
//                         </CDBBox>
//                     </CDBBox>
//                 </CDBBox>
//                 <hr style={{ color:'white'}}/>
//                 <CDBBox display="flex" className="mt-4 d-flex justify-content-center">
//                     <small className="  text-white">{t("footer.copyright")}</small>
//                 </CDBBox>
//             </CDBBox>
//
//         </footer>
//     );
// };
//
// export default withTranslation("general") (Footer);
