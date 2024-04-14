import React, {useCallback, useEffect, useState} from 'react';
import qoute from "../../../assets/qoute.png"
import {useParams} from "react-router-dom";
import {Api} from "../utils/Api.ts";
import Loading from "../components/allComponents/Loading.jsx";
import i18n from "../translations/i18n.js";
import parseHtml from "html-react-parser"
import i18next from "i18next";

const LatestWorkDetailsPage = () => {
    const lang = i18n.language;
    const {slug} = useParams();
    const [apiData, setApiData] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const getDataFromApi = useCallback(() => {
        setLoading(true)
        Api.get({
            path: "/latest-work/details",
            data: {slug},
            hideMessage: true,
            hasToken: false
        }).then(r => {
            if (r.data) {
                setApiData(r.data)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [slug])

    const getData = () => {
        if (!apiData) return null;
        const result = {};
        ["title", "subTitle", "summary", "description", "quote"].forEach((k) => {
            const x = apiData[`${k}_${lang}`];
            if (x) {
                result[k] = x;
            }
        })
        return result;
    }

    useEffect(() => {
        i18next.on('languageChanged', () => {
            setData(getData())
        });
    }, []);

    useEffect(() => {
        setData(getData())
    }, [lang, apiData]);

    useEffect(() => {
        getDataFromApi();
    }, [slug]);

    if (loading) {
        return <Loading fullScreen />
    }

    if (!apiData || !data) {
        return <>no data found</>
    }

    const path = apiData?.externalLink;

    return (
        <div data-scroll-section>
            <div className= 'text-start pt-5 mb-3 container text-center'    >
                <div  className='fw-bolder fs-1 mt-5 responsive-font text-white'>
                    {data?.title}
                </div>
                <p className='text-white text-center mt-3'>
                    {data?.subTitle}
                </p>
            </div>

            <div className='container mt-5'>
                <div className="text-secondary lead my-5">
                    {data?.summary}
                </div>

                <div className='row mx-0 mt-5'>
                {
                    apiData?.media_files?.map((e,i)=>{
                        return(
                            <div key={i} className='col-lg-6 mb-4'>
                                <img className="w-100 rounded" src={e.fileURL} alt=""/>
                            </div>
                        )
                    })
                }
                </div>

                <div className="latestwork-description mt-5">
                    {parseHtml(data?.description ?? "")}
                </div>

                {path && <div className='d-flex justify-content-end my-5'>
                    <a href={path} target="_blank" style={{
                        background: "var(--linearBG)",
                        borderRadius: "100px",
                        cursor: "pointer",
                        textDecoration: "none",
                        padding: '15px',
                        margin: '20px',
                        color: 'white',
                        border: 'none'
                    }}>
                        {path?.length > 53 ? `${`${path}`.slice(0, 50)}...` : path}
                    </a>
                </div>}

                {
                    data?.quote && <div className='container my-5 position-relative' >
                        <img src={qoute} className='w-100' alt=""/>
                        <div  className='text-white fw-bold qoute'>{data?.quote}</div>
                    </div>
                }
            </div>
        </div>
    );
};

export default LatestWorkDetailsPage;
