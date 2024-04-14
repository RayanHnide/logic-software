import React from 'react';
import {useNavigate} from "react-router-dom";

const PortfolioCardComponent = ({img,title,description,btnTitle, btnLink, isDarkButton=false}) => {
    const nav = useNavigate();
    return (
        <>
                  <div className="card mt-5"  style={{alignSelf:'start',flex:'1'}}>
                      <div className="card-details position-relative mt-3" >
                          <img className='w-100' src={img} alt=""/>
                          <button onClick={() => nav(btnLink)} style={{color: isDarkButton ? "black" : "white"}} className="card-button">{btnTitle}</button>
                      </div>

                      <div style={{fontSize:'20px',color:'white'}} className='fw-bold m-2'>{title}</div>
                      <div style={{fontSize:'14px',color:'white'}} className='fw-bold m-2'>{description}</div>
                  </div>
        </>
    );
};

export default PortfolioCardComponent;
