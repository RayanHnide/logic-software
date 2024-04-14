// import React, {useState} from 'react';
// import {withTranslation} from "react-i18next";
// import map from "../../../../assets/map.png"
// import i18n from "../../translations/i18n.js";
//
// const ContactUs = ({t, isNewPage = true}) => {
//     const rtl = i18n.dir() === "rtl";
//     const initialState = {
//         name: "",
//         email: "",
//         message: ""
//     };
//     const [state, setState] = useState(initialState)
//     const handleChange = (val, name) => {
//         const v = val?.target?.value ?? val ?? "";
//         setState(prevState => ({...prevState, [name]: v}))
//     }
//     const onSend = () => {
//         // THIS IS NOT WORKING
//         // <a href="mailto:info@logic-development.net?subject=From%20Website&body=theBody">send mail</a>
//     }
//
//     return (
//         <div id="contact-us" data-scroll-section>
//             <div className={`${isNewPage ? 'container' : 'text-center'} mt-5`}>
//                 <div className='fw-bold  mb-3 responsive-font text-white'>
//                     {t("contact.title")}
//                 </div>
//                 <p className='text-white mb-5'>{t("contact.description")}</p>
//             </div>
//             <div className='container position-relative pt-5 '>
//                 <div className='row mx-0'>
//                     <div className='col-lg-4'>
//                         <div>
//                             <input value={state.name} onChange={(v) => handleChange(v,"name")} type="text" placeholder={t("contact.namePlaceholder")} className='inputStyle'/>
//                         </div>
//
//                         <div>
//                             <input value={state.email} onChange={(v) => handleChange(v,"email")} type="email" placeholder={t("contact.emailPlaceholder")} className='inputStyle'/>
//                         </div>
//
//                         <div>
//                             <textarea value={state.message} onChange={(v) => handleChange(v,"message")} placeholder={t("contact.textAreaPlaceholder")} cols={30} rows={7}
//                                       className='inputStyle'/>
//                         </div>
//                         <div className='d-flex justify-content-center'>
//                             <button onClick={onSend} className='responsive-btn' style={{
//                                 background: "var(--linearBG)",
//                                 borderRadius: "100px",
//                                 padding: '10px',
//                                 margin: '20px',
//                                 color: 'white',
//                                 border: 'none',
//                                 width: '50%'
//                             }}>{t("contact.submit")}</button>
//                         </div>
//                     </div>
//                     <div className='col-lg-7 mx-lg-5 mx-0  d-flex justify-content-center '>
//                         <div className='contact_card p-4 mb-5 w-100 ' style={{position: 'relative', zIndex: '999'}}>
//                             <div className='fw-bold mx-5 responsive-font text-white'>
//                                 {t("contact.subTitle")}
//                             </div>
//                             <div className='d-flex justify-content-center '>
//                                 <div>
//                                     {t("ContactUsCard", {returnObjects: true}).map((e, i) => {
//                                         return (
//                                             <div style={{gap: "20px"}} key={i} className='mx-0 mt-5 d-flex'>
//                                                 <div className='text-white d-inline-block fs-3'>
//                                                     <span>
//                                                         <img width={35} src={new URL(e.img, import.meta.url).href} alt=""/>
//                                                     </span>
//                                                 </div>
//                                                 <div className='pt-2 d-inline-block text-white'>
//                                                     <div>{e.title}</div>
//                                                     <div>{e.description} </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <img width={700} src={map} alt="" className='d-none d-lg-flex' style={{
//                         position: 'absolute',
//                         top: '-20px',
//                         zIndex: '1',
//                         ...(rtl ? {left: "70px"} : {right: '70px'}),
//                         opacity: '0.7'
//                     }}/>
//                 </div>
//             </div>
//
//
//         </div>
//     );
// };
//
// export default withTranslation("home")(ContactUs);
