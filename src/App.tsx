import { RequireAuth } from './widgets';
import { Route, Routes } from 'react-router-dom';

import { AuthPage, GamePage, LandingPage, MenuPage, WithVeil } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="*" element={<div>No Page</div>} />
        <Route path="/game" element={<WithVeil />}>
          <Route path="register" element={<AuthPage type="register" />} />
          <Route path="login" element={<AuthPage type="login" />} />
          <Route path="/game" element={<RequireAuth />}>
            <Route index element={<MenuPage />} />
            <Route path="/game/:id" element={<GamePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
