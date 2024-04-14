import React from 'react';

const Loading = ({fullScreen=false, dark=false}) => {
    return (
        <div style={fullScreen ? {height: "100vh"} : {}} className={fullScreen ? "w-100 text-white d-flex justify-content-center align-items-center" : ""}>
            <div className={`spinner-border text-${dark ? "dark" : "light"}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
