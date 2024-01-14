import Seperator from "../Seperator"
import Text from "../Text"
import React from "react"

interface IProps {
    children?: any;
}

const Header = ( { children } :IProps ) => {
    return  (
        <>
            <div className="sticky top-0 z-20">
                <Text subtitle className="sticky top-0 my-6">
                    {children}
                </Text>
            </div>
            <Seperator className="mb-11 dark:border-transparent border-transparent"/> 
        </>
    )
}

export default Header