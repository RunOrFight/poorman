import { Route, Routes } from "react-router-dom";
import { AuthPage, GamePage, MenuPage } from "./pages";
import { RequireAuth } from "./widgets";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();
const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
      <Route path="*" element={<div>No Page</div>} />
      <Route path="/" element={<RequireAuth />}>
        <Route index element={<MenuPage />} />
        <Route path="game/:id" element={<GamePage />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
