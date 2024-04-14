import React, {useEffect, useState} from 'react';
import {withTranslation} from "react-i18next";
import {Editor} from "primereact/editor";
import {Api} from "../../utils/Api.ts";
import {toast} from "react-toastify";
import FileInput from "../../components/FileInput.jsx";
import useLatestWorkSource from "../../hooks/useLatestWorkSource.jsx";
import Loading from "../../components/allComponents/Loading.jsx";
import {useNavigate, useParams} from "react-router-dom";

const EditLatestWork = ({...props}) => {
    const t = props.t;
    const nav = useNavigate();
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
    const {data, loading, refresh} = useLatestWorkSource(true);

    const [descriptionEn, setDescriptionEn] = useState("")
    const [descriptionAr, setDescriptionAr] = useState("")
    const [cover, setCover] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [allOk, setAllOk] = useState(false)

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
        Object.entries(initialState).forEach(([k]) => {
            if (state[k] && state[k].length > 0 && (state[k] !== data[k])) {
                d.append(k, state[k])
            }
        })
        if (data?.description_en !== descriptionEn) {
            d.append("description_en", descriptionEn);
        }
        if (descriptionAr.length > 10 && data?.description_ar !== descriptionAr) {
            d.append("description_ar", descriptionAr);
        }
        if (!cover?.src) {
            d.append("coverPhoto", cover);
        }
        if (!photos?.find(p => p.src)) {
            for (let i=0; i<photos.length; i++) {
                d.append(`files[${i}]`, photos[i])
            }
        }
        const hasTitleChanged = data?.title_en !== state?.title_en;
        Api.post({
            path: `/latest-work/${data?.id}`,
            data: d
        }).then(r => {
            if (r.success) {
                toast(t("success.saved"))
                if (hasTitleChanged) {
                    nav("/dashboard", {replace: true})
                } else {
                    refresh()
                }
            }
        })
    }

    const onDelete = () => {
        Api.post({
            path: `/latest-work/${data?.id}`,
            method: "DELETE"
        }).then(r => {
            nav("/dashboard")
        })
    }

    useEffect(() => {
        if (!loading && data) {
            setAllOk(false);
            setState({
                title_en: data?.title_en,
                title_ar: data?.title_ar,
                subTitle_en: data?.subTitle_en,
                subTitle_ar: data?.subTitle_ar,
                summary_en: data?.summary_en,
                summary_ar: data?.summary_ar,
                quote_en: data?.quote_en,
                quote_ar: data?.quote_ar,
                externalLink: data?.externalLink,
            })
            if (data?.description_ar) {
                setDescriptionAr(data?.description_ar)
            }
            setCover({src: data.cover})
            if (data?.media_files?.length > 0) {
                setPhotos(data?.media_files?.map(m => ({src: m.fileURL})))
            }
            setDescriptionEn(data?.description_en ?? "")
            setAllOk(true)
        }
    }, [data, loading]);

    return (
        <>
            <h3>{t("latestWork.edit")}</h3>
            <div className="container my-5">
                <div style={{paddingTop: "5rem", paddingBottom: "2rem"}}
                     className="contact_card px-3 text-center hideFont ql-direction-rtl">
                    {
                        (loading || !allOk) ? <Loading /> : <>
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

                            <div>
                                <div onClick={onSave} className="btn btn-primary w-50 mt-5">{t("save")}</div>
                            </div>
                            <div onClick={onDelete} className="btn btn-danger w-50 mt-5">{t("delete")}</div>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default withTranslation("dashboard")(EditLatestWork);
