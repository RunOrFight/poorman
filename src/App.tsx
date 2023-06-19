import { Route, Routes } from "react-router-dom";
import { AuthPage, GamePage, MenuPage } from "./pages";
import { AuthProvider, SignalRProvider } from "./services";
import { RequireAuth } from "./widgets";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<AuthPage type="login" />} />

      <Route
        path="/game/:id"
        element={
          <RequireAuth>
            <SignalRProvider>
              <GamePage />
            </SignalRProvider>
          </RequireAuth>
        }
      />

      <Route
        index
        path="*"
        element={
          <RequireAuth>
            <SignalRProvider>
              <MenuPage />
            </SignalRProvider>
          </RequireAuth>
        }
      />
    </Routes>
  </AuthProvider>
);

export default App;
