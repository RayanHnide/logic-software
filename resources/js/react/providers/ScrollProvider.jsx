import React, {useEffect, useRef} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";

const ScrollProvider = ({children}) => {
    const containerRef = useRef();

    useEffect(() => {
        let magic = window.screen.height * 0.306481481;
        if (window.screen.width < 950) {
            magic = magic / 4;
        }
        document.body.style.setProperty("--scrollOfY",`0`);
        document.body.style.setProperty("--magicNum",`${magic}`);
        document.body.style.setProperty("--height",`${window.screen.height}`);
        document.body.style.setProperty("--width",`${window.screen.width}`);
    }, []);

    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    smoothMobile: true,
                    smartphone: {
                        smooth: true
                    },
                    tablet: {
                        smooth: true
                    },
                    repeat: true,
                }
            }
            watch={
                [
                    //...all the dependencies you want to watch to update the scroll EXCEPT the location one
                ]
            }
            containerRef={containerRef}
            onUpdate={(scroll) => {
                scroll.on("scroll", (e) => {
                    let y = e?.scroll?.y ?? 0;
                    // if (y > 0 && y < 20) {
                    //     y = 0;
                    // }
                    const scrollOfY = y * (window.screen.width < 950 ? 0.1 : 0.4);
                    document.body.style.setProperty("--scrollOfY",`${scrollOfY}`);
                    document.body.style.setProperty("--rand",`${Math.round(Math.random())}`);
                })
            }}
        >
            <div ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
};

export default ScrollProvider;
