import {FC, PropsWithChildren} from "react";

interface  SideProps extends PropsWithChildren{
    extraClassName?:  string
}

const Side: FC<SideProps> = ({children, extraClassName}) => {


    return (
        <div className={`w-1/4 h-full px-10 flex flex-col py-5 ${extraClassName}`}>
            {children}
        </div>
    );
};

export default Side;