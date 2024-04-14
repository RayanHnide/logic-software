import React, {useState} from 'react';
import img1 from "../../../../assets/s1.png"
import img2 from "../../../../assets/s2.png"
import img3 from "../../../../assets/s3.png"
const ServicesComponent = ({centerImage = "center", className,isImage=true,titleSize="small",isCenterImg=true,isCenterCard=true,title,description}) => {


    return (
        <>
            <div className={`${isCenterCard?'notCenterCard p-1 p-lg-3 my-2 mx-3':'centerCard'} service-component px-4 ${className ?? ""}`}>
                {
                    isImage&&
                    <div  style={{display:'flex',justifyContent:centerImage,}}  >
                        <img className={isCenterImg?'w-75 p-2':'w-50 mx-3 p-2'}  src={img1} alt=""/>
                    </div>
                }

                {titleSize === "small" ? <h4 style={{ color:'white'}} className='fw-bold mt-4 mx-2'>{title}</h4> : <h1 style={{ color:'white'}} className='fw-bold mt-4 mx-2'>{title}</h1>}
                <div style={{fontSize:'14px',color:'white'}} className='lead fs-5 p-2'>
                    {description}
                 </div>
            </div>
        </>
    );
};

export default ServicesComponent;
