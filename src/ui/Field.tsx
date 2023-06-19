import { useDroppable } from "@dnd-kit/core";
import { FC, PropsWithChildren } from "react";

interface IFieldProps extends PropsWithChildren {
  id: string;
}

const Field: FC<IFieldProps> = ({ children, id }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      className="w-44 h-72 bg-cover bg-no-repeat flex items-center justify-center"
      id="field"
      ref={setNodeRef}
    >
      {children}
    </div>
  );
};

export default Field;
