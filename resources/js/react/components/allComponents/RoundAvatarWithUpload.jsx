import React, {useState} from 'react';
import addAvatar from "../../../../assets/avatar-add.png";
import RoundAvatar from "./RoundAvatar.jsx";

const RoundAvatarWithUpload = ({onChange}) => {
    const [photo, setPhoto] = useState(addAvatar)
    const onFileBrowse = (e) => {
        const f = e?.target?.files?.length > 0 ? e.target.files[0] : null;
        if (f) {
            const reader = new FileReader();
            reader.readAsDataURL(f);
            reader.onload = function () {
                setPhoto(reader.result)
            };
        } else {
            setPhoto(addAvatar)
        }
        onChange && onChange(f);
    }
    return (
        <RoundAvatar src={photo} onClick={() => {
            const el = document.createElement("input");
            el.type = "file";
            el.accept = ".jpeg,.jpg,.png";
            el.onchange = onFileBrowse;
            el.click();
        }} />
    );
};

export default RoundAvatarWithUpload;
