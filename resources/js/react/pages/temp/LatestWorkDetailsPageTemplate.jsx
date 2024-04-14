import React from 'react';
import img from "../../../../assets/project2.png"
import img1 from "../../../../assets/project1.png"
import qoute from "../../../../assets/qoute.png"

const LatestWorkDetailsPageTemplate = () => {
    const data = [img,img1]
    const extra =[
        {
        title:'How to manage custom orders of corporate gifts',
        description:" Rare Assembly specializes in corporate gifts for companies in all sectors. They needed a better solution for managing their bulk and custom orders. They also wanted to give website visitors a way to offer gift choices to their clients right through their site The app had to be seamless, brandable, and connected to Shopify on the backend.The client interviewed three firms, and despite their initial preference that the firm is in the U.S. (for time zone purposes), she decided on Xfive because of our portfolio and understanding of what the client was looking for."
        },
        {
            title:'Time zone differences? No problem',
            description:" Rare Assembly specializes in corporate gifts for companies in all sectors. They needed a better solution for managing their bulk and custom orders. They also wanted to give website visitors a way to offer gift choices to their clients right through their site The app had to be seamless, brandable, and connected to Shopify on the backend.The client interviewed three firms, and despite their initial preference that the firm is in the U.S. (for time zone purposes), she decided on Xfive because of our portfolio and understanding of what the client was looking for."
        },
    ]
    return (
        <>

            <div className= 'text-start mb-3 container text-center'    >
                <div  className='fw-bolder fs-1 mt-5 responsive-font text-white'>
                    Project Name
                </div>
                <p className='text-white text-center mt-3'>
                    disrupted the gift box market by offering design-focused products <br/> from quality brands in high-end packaging that’s fully gift-ready.                </p>
            </div>

            <div className='container mt-5'>
                 <div className='row mx-0 mt-5 p-4 justify-content-center'>

                     {
                         data.map((e,i)=>{
                             return(
                                 <div key={i} className='col-lg-6 '>
                                     <img className='w-100' src={e} alt=""/>
                                 </div>
                             )
                         })
                     }
                 </div>
                {
                    extra.map((e,i)=>{
                        return(
                            <>
                                <div>
                                    <h1 key={i} style={{color:"#c028de"}} className='mt-5 fw-bold'>{e.title}</h1>
                                    <p className='text-white'>
                                        {e.description}
                                    </p>
                                </div>


                            </>
                        )
                    })
                }
                <div className='container'>
                    <img className='w-100' src={img1} alt=""/>
                </div>

                <div className='container mt-5   position-relative' >
                    <img src={qoute} className='w-100' alt=""/>
                    <div  className='text-white fw-bold qoute'>lThe quality of the deliverables and the accessibility of the team were impressive.</div>
                </div>
            </div>
        </>
    );
};

export default LatestWorkDetailsPageTemplate;
