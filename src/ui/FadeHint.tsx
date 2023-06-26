import { FC, PropsWithChildren } from 'react';

const FadeHint: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="fade-hint bg-purple h-fit w-fit px-2 py-0.5 text-xl text-white rounded opacity-0">
      {children}
    </div>
  );
};

export default FadeHint;
