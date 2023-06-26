import { FC, PropsWithChildren } from 'react';

const SpaceBg: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">{children}</div>
      </div>
    </div>
  );
};

export default SpaceBg;
