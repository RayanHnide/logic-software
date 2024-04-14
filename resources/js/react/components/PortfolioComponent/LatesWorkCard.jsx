import React, {useMemo} from 'react';
import i18n from "../../translations/i18n.js";
import {useNavigate} from "react-router-dom";

const LatestWorkCard = ({latestWork, customPath}) => {
    const lang = i18n.language;
    const nav = useNavigate();
    const data = useMemo(() => {
        if (!latestWork) return null;
        const result = {};
        ["title", "subTitle", "summary"].forEach((k) => {
            const x = latestWork[`${k}_${lang}`];
            if (x) {
                result[k] = x;
            }
        })
        return result;
    }, [lang])

    const path = latestWork?.externalLink;

    return (
        <div onClick={() => nav(customPath ?? `/portfolio/${latestWork?.slug}/details`)} className="m-lg-2 latestwork-card">
            <div className='d-flex justify-content-start w-100'>
                <img style={{objectFit: "cover", maxWidth: "100%"}} src={latestWork?.cover ?? ""} alt=""/>
            </div>
            <div className="latestwork-text">
                <div className='fw-bold mt-4 fs-2 text-white'>{data?.title}</div>
                <div className='fw-bold fs-3 text-white'>{data?.subTitle}</div>
                {path && <div className='d-flex'>
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
                <div className='lead text-white p-3'>
                    {data?.summary}
                </div>
            </div>
        </div>
    );
};

export default LatestWorkCard;
