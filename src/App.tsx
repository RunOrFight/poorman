import { AuthPage, GamePage, MenuPage, Landing } from './pages';
import { RequireAuth } from './widgets';

import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';

const transitionConfig = {
  from: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    transform: `translate3d(100%, 0, 0)`,
  },
  enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  leave: {
    opacity: 0,
    transform: `translate3d(-50%, 0, 0)`,
  },
};

const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, transitionConfig);

  return transitions((style) => (
    <animated.div
      className="w-full h-full overflow-hidden"
      style={{ ...style, overflow: 'hidden' }}
    >
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="*" element={<div>No Page</div>} />
        <Route path="/game">
          <Route path="register" element={<AuthPage type="register" />} />
          <Route path="login" element={<AuthPage type="login" />} />
          <Route path="/game" element={<RequireAuth />}>
            <Route index element={<MenuPage />} />
            <Route path="/game/:id" element={<GamePage />} />
          </Route>
        </Route>
      </Routes>
    </animated.div>
  ));
};

export default App;
