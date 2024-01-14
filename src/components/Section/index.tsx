import Header from "../Header";
import React from "react"

interface IProps {
    children?: any;
    heading?: string;
}

const Section = React.forwardRef<HTMLDivElement, IProps>(({ children, heading="" }, ref) => {
    return  (
        <div ref={ref} className="flex flex-wrap w-full h-fit">
            <Header>{heading}</Header>
            {children} 
        </div>
    )
});

export default Section