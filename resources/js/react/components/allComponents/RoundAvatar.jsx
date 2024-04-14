import React from 'react';
import defaultAvatar from "../../../../assets/person_icon.jpg";

const RoundAvatar = ({size="130px", src, onClick, objectFit="cover"}) => {
    return (
        <div className={onClick ? "animated-avatar" : ""} onClick={onClick} style={{height: size, width: size, borderRadius: "50%", cursor: onClick ? "pointer" : "auto", overflow: "hidden"}}>
            <img style={{objectFit, height: size, width: size}} src={src ?? defaultAvatar} alt=""/>
        </div>
    );
};

export default RoundAvatar;
