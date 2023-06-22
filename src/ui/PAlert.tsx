import {FC, PropsWithChildren} from "react";

const PAlert: FC<PropsWithChildren> = ({children}) => {
    return (
        <p role="alert" className="text-sm text-red-600">
            {children}
        </p>
    );
};

export default PAlert;