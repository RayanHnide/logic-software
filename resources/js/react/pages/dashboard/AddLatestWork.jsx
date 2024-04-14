import React, {useState} from 'react';
import {withTranslation} from "react-i18next";
import {Editor} from "primereact/editor";
import {Api} from "../../utils/Api.ts";
import {toast} from "react-toastify";
import FileInput from "../../components/FileInput.jsx";

const AddLatestWork = ({...props}) => {
    const t = props.t;
    const trans = {
        title_en: "Title (english)",
        title_ar: "العنوان (عربي)",
        subTitle_en: "Sub-Title (english)",
        subTitle_ar: "العنوان الجزئي (عربي)",
        summary_en: "Summary (english)",
        summary_ar: "الملخص (عربي)",
        quote_en: "Quote (english)",
        quote_ar: "المقولة (عربي)",
        externalLink: "رابط المشروع",
    }
    const initialState = {
        title_en: "",
        title_ar: "",
        subTitle_en: "",
        subTitle_ar: "",
        summary_en: "",
        summary_ar: "",
        quote_en: "",
        quote_ar: "",
        externalLink: "",
    };
    const [state, setState] = useState(initialState);

    const [descriptionEn, setDescriptionEn] = useState("")
    const [descriptionAr, setDescriptionAr] = useState("")
    const [cover, setCover] = useState(null)
    const [photos, setPhotos] = useState(null)

    const handleState = (val, name) => {
        const v = val?.target?.value ?? val;
        setState(prevState => ({...prevState, [name]: v}));
    }

    const onSave = () => {
        if (!(state.title_en.length > 0 && state.subTitle_en.length > 0 && state.summary_en.length > 0 && descriptionEn.length > 10 && cover != null)) {
            toast(t("latestWork.requiredFieldsCreate"))
            return;
        }
        const d = new FormData();
        Object.entries(state).forEach(([k, v]) => {
            if (v.length > 0) {
                d.append(k, v)
            }
        })
        d.append("description_en", descriptionEn);
        d.append("coverPhoto", cover);
        if (descriptionAr.length > 10) {
            d.append("description_ar", descriptionAr);
        }
        if (photos?.length > 0) {
            for (let i=0; i<photos.length; i++) {
                d.append(`files[${i}]`, photos[i])
            }
        }
        Api.post({
            path: "/latest-work",
            data: d
        }).then(r => {
            if (r.success) {
                toast(t("success.saved"))
                setState(initialState)
                setDescriptionEn("")
                setDescriptionAr("")
                setPhotos(null)
                setCover(null)
            }
        })
    }

    return (
        <>
            <h3>{t("latestWork.newWork")}</h3>
            <div className="container my-5">
                <div style={{paddingTop: "5rem", paddingBottom: "2rem"}}
                     className="contact_card px-3 text-center hideFont ql-direction-rtl">
                    {["title", "subTitle", "summary"].map(((l, i) => {
                        const keyEn = `${l}_en`, keyAr = `${l}_ar`;
                        if (i === 0) {
                            return <div key={l}>
                                <input dir="ltr" value={state[keyEn]} onChange={(e) => handleState(e, keyEn)}
                                       className="custom-input mx-2" placeholder={trans[keyEn]}/>
                                <input dir="rtl" value={state[keyAr]} onChange={(e) => handleState(e, keyAr)}
                                       className="custom-input mx-2" placeholder={trans[keyAr]}/>
                            </div>
                        }
                        return <div key={l}>
                            <textarea dir="ltr" rows={5 * i} value={state[keyEn]}
                                      onChange={(e) => handleState(e, keyEn)} className="custom-input mx-2"
                                      placeholder={trans[keyEn]}/>
                            <textarea dir="rtl" rows={5 * i} value={state[keyAr]}
                                      onChange={(e) => handleState(e, keyAr)} className="custom-input mx-2"
                                      placeholder={trans[keyAr]}/>
                        </div>
                    }))}

                    <textarea dir="ltr" rows={2} value={state.quote_en} onChange={(e) => handleState(e, "quote_en")}
                              className="custom-input mx-2" placeholder={trans.quote_en}/>
                    <textarea dir="rtl" rows={2} value={state.quote_ar} onChange={(e) => handleState(e, "quote_ar")}
                              className="custom-input mx-2" placeholder={trans.quote_ar}/>

                    <h3 className="mt-3 mb-2">{trans.externalLink}</h3>
                    <input dir="ltr" value={state.externalLink} onChange={(e) => handleState(e, "externalLink")}
                           className="custom-input mx-2" placeholder="https://myproject.com"/>

                    <h2 className="mt-3 mb-2">Description (english)</h2>
                    <Editor dir="ltr" pt={{
                        toolbar: {
                            className: "bg-white"
                        }
                    }} value={descriptionEn} onTextChange={(e) => setDescriptionEn(e.htmlValue)}
                            style={{minHeight: '400px'}}/>

                    <h2 className="mt-5 mb-2">الوصف (عربي)</h2>
                    <Editor className="arabic-editor" dir="rtl" pt={{
                        toolbar: {
                            className: "bg-white"
                        }
                    }} value={descriptionAr} onTextChange={(e) => setDescriptionAr(e.htmlValue)}
                            style={{minHeight: '400px'}}/>

                    <h3 className="mt-5 mb-3">صورة الغلاف</h3>
                    <FileInput accept=".jpeg,.jpg,.png" value={cover} onChange={(v) => setCover(v)} />

                    <div>
                        <h3 className="mt-5 mb-3">صور للمشروع</h3>
                        <FileInput multiple accept=".jpeg,.jpg,.png" value={photos} onChange={(v) => setPhotos(v)} />
                    </div>

                    <div onClick={onSave} className="btn btn-primary w-50 mt-5">{t("save")}</div>
                </div>
            </div>
        </>
    );
};

export default withTranslation("dashboard")(AddLatestWork);
