import { Route, Routes } from "react-router-dom";
import { AuthPage, GamePage, MenuPage } from "./pages";
import { AuthProvider } from "./services";
import { RequireAuth } from "./components";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<AuthPage type="login" />} />

      <Route
        path="/game"
        element={
          <RequireAuth>
            <GamePage />
          </RequireAuth>
        }
      />

      <Route
        index
        path="*"
        element={
          <RequireAuth>
            <MenuPage />
          </RequireAuth>
        }
      />
    </Routes>
  </AuthProvider>
);

export default App;
