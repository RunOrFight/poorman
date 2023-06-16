import {useDraggable} from '@dnd-kit/core';
import {FC} from "react";

interface CardProps{
    id: string
}
const Card: FC<CardProps> = ({id}) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div id={id} ref={setNodeRef} style={style} {...listeners} {...attributes} className="w-40 h-60  bg-contain bg-no-repeat bg-center"/>
    );
};

export default Card;