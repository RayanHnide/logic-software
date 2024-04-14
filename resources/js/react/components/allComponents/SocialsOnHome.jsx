import React from 'react';
import {CiFacebook, CiLinkedin} from "react-icons/ci";
import {FiInstagram} from "react-icons/fi";
import {withTranslation} from "react-i18next";
import i18n from "../../translations/i18n.js";

const SocialsOnHome = ({...props}) => {
    const rtl = i18n.dir() === "rtl";
    const t = props.t;
    return (
        <div style={{position: 'absolute', top: '15%', ...(rtl ? {left: '3%'} : {right: '3%'})}}>
            <a href={t("socialLinks.facebook")} target="_blank" className="no-decoration d-block">
                <CiFacebook className='fs-1 text-white'/>
            </a>
            <a href={t("socialLinks.instagram")} target="_blank" className="no-decoration d-block">
                <FiInstagram className='fs-1  text-white mt-4 mb-4 '/>
            </a>
            <a href={t("socialLinks.linkedIn")} target="_blank" className="no-decoration d-block">
                <CiLinkedin className='fs-1 text-white' style={{borderRadius: '50%'}}/>
            </a>
        </div>
    );
};

export default withTranslation("general")(SocialsOnHome);
