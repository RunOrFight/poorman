import { Outlet } from 'react-router';

const WithVeil = () => {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <div className="veil-left bg-black w-1/2 h-full absolute top-0 left-0 z-10">CYBER</div>
      <div className="veil-right bg-black w-1/2 h-full absolute top-0 right-0 z-10">CATS</div>
      <Outlet />
    </div>
  );
};

export default WithVeil;
