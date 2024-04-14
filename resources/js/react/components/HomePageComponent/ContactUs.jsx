import React, {useState} from 'react';
import {withTranslation} from "react-i18next";
import map from "../../../../assets/map-bg.png"
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";

const ContactUs = ({newPage=false,...props}) => {
    const t = props.t;
    const {width} = useWindowDimensions()
    const initialState = {
        name: "",
        email: "",
        message: ""
    };
    const [state, setState] = useState(initialState)
    const handleChange = (val, name) => {
        const v = val?.target?.value ?? val ?? "";
        setState(prevState => ({...prevState, [name]: v}))
    }
    const onSend = () => {
        // THIS IS NOT WORKING
        // <a href="mailto:info@logic-development.net?subject=From%20Website&body=theBody">send mail</a>
    }

    return (
        <div className="overflow-hidden" data-scroll-section>
            <div className={`pt-5 ${width > 572 ? "container" : ""}`}>
                <div className={`mt-5 ${newPage ? "text-center pt-5 pb-3" : ""} ${width <= 572 ? "container" : ""}`}>
                    <div className='fw-bold  mb-3 responsive-font text-white'>
                        {t("contact.title")}
                    </div>
                    <p className='text-white mb-5'>{t("contact.description")}</p>
                </div>
                <div className='row mx-0 justify-content-between reverse-col-small'>
                    <div className='col-lg-4'>
                        <div className={width <= 572 ? "container" : ""}>
                            <div>
                                <input value={state.name} onChange={(v) => handleChange(v, "name")} type="text"
                                       placeholder={t("contact.namePlaceholder")} className='inputStyle'/>
                            </div>

                            <div>
                                <input value={state.email} onChange={(v) => handleChange(v, "email")} type="email"
                                       placeholder={t("contact.emailPlaceholder")} className='inputStyle'/>
                            </div>

                            <div>
                            <textarea value={state.message} onChange={(v) => handleChange(v, "message")}
                                      placeholder={t("contact.textAreaPlaceholder")} cols={30} rows={7}
                                      className='inputStyle'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button onClick={onSend} className='contact-btn width50-100'>{t("contact.submit")}</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 px-0'>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex align-items-center"
                                 style={{position: 'relative', height: "554px", maxWidth: "100%"}}>
                                <div className='contact_card contact-card-contents p-4 w-100'>
                                    <div className='fw-bold mx-5 responsive-font text-white'>
                                        {t("contact.subTitle")}
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <div>
                                            {t("ContactUsCard", {returnObjects: true}).map((e, i) => {
                                                return (
                                                    <div style={{gap: "20px"}} key={i} className='mx-0 mt-5 d-flex'>
                                                        <div className='text-white d-inline-block fs-3'>
                                                    <span>
                                                        <img width={35} src={new URL(e.img, import.meta.url).href}
                                                             alt=""/>
                                                    </span>
                                                        </div>
                                                        <div className='pt-1 d-inline-block text-white'>
                                                            <div>{e.title}</div>
                                                            <div>{e.description} </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <img height="554px" src={map} alt="" style={{
                                    opacity: '0.7'
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default withTranslation("home")(ContactUs);
