import { Route, Routes } from 'react-router-dom';
import { AuthPage, GamePage, MenuPage, Landing } from './pages';
import { RequireAuth } from './widgets';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { isGameOnlyMode } from './constants';

const store = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        {isGameOnlyMode ? (
          <Route path="*" element={<GamePage />}></Route>
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
    </Provider>
  );
};

export default App;
