import {FC, PropsWithChildren} from "react";

const Hand: FC<PropsWithChildren> = ({children}) => {


    return (
        <div className="w-full h-1/2 border-blue-600 border p-2.5 flex gap-2" id="hand">
            {children}
        </div>
    );
};

export default Hand;