import Seperator from "../Seperator"
import Text from "../Text"
import React from "react"

interface IProps {
    children?: any;
}

const Header = React.forwardRef<HTMLDivElement, IProps>(({ children }, ref) => {
    return  (
        <div ref={ref} className="w-full">
            <Text subtitle className="w-full">
                {children}
            </Text>
            <Seperator className="mt-6 mb-11"/>      
        </div>
    )
});

export default Header