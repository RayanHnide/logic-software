import React, {useEffect, useState} from 'react';
import map from "../../../assets/map.png";
import {withTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {Api} from "../utils/Api.ts";
import {AuthHelper} from "../utils/AuthHelper.ts";
import {useNavigate} from "react-router-dom";
import Loading from "../components/allComponents/Loading.jsx";

const ContactUsPage = ({...props}) => {
    const {t} = props;
    const nav = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const imgStyle = {
        position: 'absolute',
        bottom: '40px',
        zIndex: '1',
        right: '10px',
        opacity: '0.7'
    }

    const pingServer = async () => {
        if ((AuthHelper.token()?.length > 10)) {
            const r = await Api.post({
                path: "/ping", hideMessage: true
            });
            return Promise.resolve(r?.success ?? false)
        }
        return Promise.resolve(false)
    }

    useEffect(() => {
        setLoading(true)
        pingServer().then(r => {
            if (r) {
                nav("/dashboard", {replace: true})
            }
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    const onLogin = (e) => {
        e?.preventDefault();
        if (data.password.length < 8) {
            toast(t("login.wrongEmailOrPassword"), {type: "error"})
            return;
        }
        Api.post({
            path: "/admin-login",
            data,
            hasToken: false
        }).then(r => {
            if (r.success && r.data?.token) {
                AuthHelper.setToken(r.data.token)
                nav("/dashboard", {replace: true})
            }
        })
    }

    const handleChange = (val, name) => {
        const v = val?.target?.value ?? val ?? "";
        setData(prevState => ({...prevState, [name]: v}))
    }

    if (loading) {
        return <div data-scroll-section>
            <Loading fullScreen />
        </div>
    }

    return (
        <div data-scroll-section className="overflow-hidden">
            <div style={{marginTop: "6em"}} className='container position-relative pt-5'>
                <div className='mx-0'>
                    <div className='mx-lg-5 mx-0  d-flex justify-content-center '>
                        <div className=' contact_card mb-5 p-5 w-100 ' style={{position: 'relative', zIndex: '999'}}>
                            <div className='fw-bold   responsive-font text-white'>
                                {t("login.title")}
                            </div>
                            <div className='d-flex justify-content-center '>
                                <form onSubmit={onLogin}>
                                    <div>
                                        <input value={data.email} onChange={(e) => handleChange(e,"email")} required style={{minWidth:"225px"}} type="email" placeholder={t("login.email")} className='inputStyle'/>
                                    </div>
                                    <div>
                                        <input value={data.password} onChange={(e) => handleChange(e,"password")} required style={{minWidth:"225px"}} type="password" placeholder={t("login.password")} className='inputStyle'/>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" className='contact-btn width50-100'>{t("login.button")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: "150px"}} className="position-relative h-100">
                    <img width={600} src={map} alt="" className='d-none d-lg-flex' style={imgStyle}/>
                </div>
            </div>


        </div>
    );
};

export default withTranslation("general")(ContactUsPage);
