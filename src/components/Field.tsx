import {useDroppable} from "@dnd-kit/core";
import { FC, PropsWithChildren } from "react";

const Field:FC<PropsWithChildren> = ({children}) => {
    const {setNodeRef} = useDroppable({
        id: 'droppable',

    });

    return (
        <div className="w-44 h-72" ref={setNodeRef}>
            {children  || <img src="src/assets/field.png"/>}
        </div>
            
    );
};

export default Field;