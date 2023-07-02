import { AuthPage, GamePage, MenuPage, Landing } from './pages';
import { Canvas, RequireAuth } from './widgets';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { isCanvasMode, isGameOnlyMode } from './constants';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

const { store, history } = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          {isGameOnlyMode ? (
            <Route path="*" element={<GamePage />}></Route>
          ) : isCanvasMode ? (
            <Route path="*" element={<Canvas />}></Route>
          ) : (
            <>
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
            </>
          )}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
