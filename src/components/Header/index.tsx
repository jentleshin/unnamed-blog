import Seperator from "../Seperator"
import Text from "../Text"

interface IProps {
    children?: any;
}

const Header = ({ children }: IProps) => {
    return  (
        <>
            <Text subtitle className="w-full mt-[500px]">
                {children}
            </Text>
            <Seperator className="mt-6 mb-11"/>      
        </>
    )
}

export default Header