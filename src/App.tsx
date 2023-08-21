import { RequireAuth } from './widgets';
import { Route, Routes } from 'react-router-dom';
import Music from './widgets/Music';
import GameMusic from './widgets/GameMusic';

import { AuthPage, GamePage, LandingPage, MenuPage, WithVeil, TutorialPage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="*" element={<div>No Page</div>} />
        <Route path="/tutorial" index element={<TutorialPage />} />
        <Route path="/game" element={<WithVeil />}>
          <Route path="register" element={<AuthPage type="register" />} />
          <Route path="login" element={<AuthPage type="login" />} />
          <Route path="/game" element={<RequireAuth />}>
            <Route
              index
              element={
                <Music>
                  <MenuPage />
                </Music>
              }
            />
            <Route
              path="/game/:id"
              element={
                <GameMusic>
                  <GamePage />
                </GameMusic>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
