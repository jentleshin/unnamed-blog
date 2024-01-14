import Seperator from "../Seperator"
import Text from "../Text"
import React, { useEffect, useState, useRef } from "react"

interface IProps {
    children?: any;
}

const Header = ( { children } :IProps ) => {
    const stickyRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (stickyRef.current) {
            const heading = stickyRef.current.querySelector("h1");
            const { top, bottom, height } = stickyRef.current.getBoundingClientRect();
            const opacity = (top > 0) ? 1 : (bottom <= height/2) ? 0 : 2*(bottom/height)-1;
            const fontSize = (top > height) ? 3.75 : (top <= 0) ? 1.875 : 1.875*(top/height)+1.875;
            const lineHeight = (top > height) ? 2.25 : (bottom <= 0) ? 1 : 1.25*(bottom/height)+1;
            //3.75 1 1.875 2.25
            stickyRef.current.style.opacity = opacity.toString();
            if (heading) {
                heading.style.fontSize = fontSize.toString()+"rem"
                heading.style.lineHeight = lineHeight.toString()+"rem"
            }
        }
        
    };

    useEffect(() => {
        // use useState first.
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return  (
        <>
            <div ref={stickyRef} className="sticky top-0 z-20">
                <Text title className="text-xl md:text-3xl my-6">
                    {children}
                </Text>
            </div>
            <Seperator className="mb-11 dark:border-lime border-organic opacity-0"/> 
        </>
    )
}

export default Header