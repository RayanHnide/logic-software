import React from 'react';

const FileInput = ({ value, buttonLabel, onChange, multiple=false, accept, ...rest }) => {
    const imgStyle = {height: "80px", width: "80px", objectFit: "cover", margin: "10px"};
    return <div>
        {((multiple && value?.length > 0) || (!multiple && value)) && (
            <div className="mt-3 mb-2">{`Selected file${multiple ? "s" : ""}:`}
                <span className="mx-2">
                    {
                        multiple ? (value.find(v => v.src) ? value.map(v => <img style={imgStyle} key={v.src} src={v.src} alt=""/>) : value.map(v => v.name).join(", ")) : (value?.src ? <img style={imgStyle} key={value.src} src={value.src} alt=""/> : value?.name)
                    }
                </span>
            </div>
        )}
        <label>
            <div className="btn btn-outline-primary">{buttonLabel ?? `Choose File${multiple ? "s" : ""}`}</div>
            <input
                {...rest}
                style={{ display: "none" }}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={e => {
                    if (multiple) {
                        onChange && onChange( [...e.target.files]);
                    } else {
                        onChange && onChange(e.target.files.length > 0 ? e.target.files[0] : null);
                    }
                }}
            />
        </label>
    </div>
};

export default FileInput;
