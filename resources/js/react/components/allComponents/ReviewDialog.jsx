import React, {useState} from "react";
import {Dialog} from "primereact/dialog";
import ReactStars from "react-rating-stars-component/dist/react-stars.js";
import StarShape from "./StarShape.jsx";
import {Api} from "../../utils/Api.ts";
import {toast} from "react-toastify";
import Loading from "./Loading.jsx";
import RoundAvatarWithUpload from "./RoundAvatarWithUpload.jsx";

const ReviewDialog = ({onDone,t}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialState = {
        rating: 0,
        clientName: "",
        comment: "",
    }
    const [state, setState] = useState(initialState)
    const [photo, setPhoto] = useState(null)

    const sendToApi = () => {
        const d = new FormData();
        Object.entries(state).forEach(([k,v]) => {
            if (v && `${v}`.length > 0) {
                d.append(k,v)
            }
        })
        if (!d.has("clientName") || !d.has("rating")) {
            toast(t("reviewDialog.requiredFields"))
            return;
        }
        if (photo) {
            d.append("photo", photo)
        }
        setLoading(true)
        Api.post({
            path: "/reviews",
            data: d,
            hasToken: false
        }).then(r => {
            if (r.success) {
                setState(initialState)
                setIsOpen(false)
                onDone && onDone();
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    const handleChange = (val, name) => {
        const v = val?.target?.value ?? val ?? "";
        setState(prevState => ({...prevState, [name]: v}))
    }

    return (
        <>
            <div className='d-flex justify-content-lg-end  justify-content-center mt-2'>
                <button onClick={() => setIsOpen(true)} className='responsive-btn contact-btn widthNone-100 mx-3'>{t("Review")}</button>
            </div>
            <Dialog
                maskClassName="dark-dialog-mask"
                showHeader={false}
                visible={isOpen}
                modal
                onHide={() => setIsOpen(false)}
            >
                <div style={{width: "95vw", maxWidth: "800px"}}>
                    <div className="container">
                        <h2 style={{fontWeight: 800}} className="text-white mb-4 text-center">{t("leaveAReview")}</h2>
                        <div className="review-box p-4">
                            <div className="container">
                                <div style={{columnGap: "16px"}} className="d-flex justify-content-center flex-wrap">
                                    <h4 style={{fontSize: "2rem"}} className="p-0 m-0">{t("reviewDialog.title")}</h4>
                                    <div>
                                        <ReactStars
                                            value={state.rating}
                                            count={5}
                                            filledIcon={<StarShape color="#ea37a3" height="36px"/>}
                                            emptyIcon={<StarShape color="#ea37a3" height="36px" outLined/>}
                                            onChange={(x) => handleChange(x,"rating")}
                                            size={24}
                                            activeColor="#bb87d0"/>
                                    </div>
                                </div>
                                <div style={{columnGap: "16px"}} className="mt-3 justify-content-center d-flex flex-wrap">
                                    <RoundAvatarWithUpload onChange={(f) => setPhoto(f)} />
                                    <div className="mt-2 mt-lg-0" style={{flexGrow: 1}}>
                                        <h5 className="pb-0 mb-0" style={{fontWeight: 600}}>{t("reviewDialog.yourName")}</h5>
                                        <div style={{minWidth: "100%"}}>
                                            <input value={state.clientName} onChange={(v) => handleChange(v, "clientName")} placeholder={t("reviewDialog.typeHere")} className="review-input mt-2" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h5 className="pb-0 mb-0" style={{fontWeight: 600}}>{t("reviewDialog.optionalComment")}</h5>
                                    <div style={{minWidth: "100%"}}>
                                        <textarea className="mt-2 review-input" style={{resize: "none"}} value={state.comment} onChange={(v) => handleChange(v, "comment")} rows={5} placeholder={t("reviewDialog.typeHere")} />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-lg-end  justify-content-center mt-2'>
                                    {
                                        loading ? <Loading /> : <button onClick={sendToApi} className='mt-0 p-3 fw-bolder width50-100 contact-btn' >{t("reviewDialog.submitReview")}</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default ReviewDialog;
