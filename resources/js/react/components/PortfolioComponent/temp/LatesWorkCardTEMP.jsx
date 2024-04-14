import React from 'react';
import project1 from '../../../../../assets/project1.png'
import project2 from '../../../../../assets/project2.png'
const LatestWorkCardTEMP = ({img,title,subTitle,path,description}) => {
    return (
        <>
         <div>
             <div className='d-flex justify-content-center justify-content-lg-start'>
                 <img className='w-75' src={img} alt=""/>
             </div>
             <div className='fw-bold text-center text-lg-start mt-4 fs-2 text-white'>{title}</div>
             <div className='fw-bold text-center text-lg-start fs-3 text-white'>{subTitle}</div>
             {path && <div className='d-flex justify-content-center justify-content-lg-start'>
                 <a href={path} target="_blank" style={{
                     background: "var(--linearBG)",
                     borderRadius: "100px",
                     cursor: "pointer",
                     textDecoration: "none",
                     padding:'15px',
                     margin:'20px',
                     color:'white',
                     border:'none'
                 }}>
                     {path}
                 </a>
             </div>}
             <div className='lead text-white p-3'>
                 {description}
              </div>
         </div>
        </>
    );
};

export default LatestWorkCardTEMP;
