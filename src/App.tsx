import { Route, Routes } from 'react-router-dom';
import { AuthPage, GamePage, MenuPage, Landing } from './pages';
import { RequireAuth } from './widgets';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { isGameOnlyMode } from './constants';
import { LOGIN_ROUTE, LANDING_ROUTE } from './constants';

const store = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        {isGameOnlyMode ? (
          <Route path="*" element={<GamePage />}></Route>
        ) : (
          <>
            <Route path={LOGIN_ROUTE} element={<AuthPage type="login" />} />
            <Route path={LANDING_ROUTE} element={<Landing />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="*" element={<div>No Page</div>} />
            <Route path="/" element={<RequireAuth />}>
              <Route index element={<MenuPage />} />
              <Route path="/game/:id" element={<GamePage />} />
            </Route>
          </>
        )}
      </Routes>
    </Provider>
  );
};

export default App;
