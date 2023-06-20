import { Route, Routes } from "react-router-dom";
import { AuthPage, GamePage, MenuPage } from "./pages";
import { AuthProvider, SignalRProvider, GameProvider } from "./services";
import { RequireAuth } from "./widgets";
import {Provider} from "react-redux";
import {setupStore} from "./store";

const store = setupStore()
const App = () => (
    <Provider store={store}>
  <AuthProvider>
    <Routes>
      <Route path="/login" element={<AuthPage type="login" />} />

      <Route
        path="/game/:id"
        element={
          //<RequireAuth>
            //<SignalRProvider>

                    <GamePage />

           // </SignalRProvider>
          //</RequireAuth>
        }
      />

      <Route
        index
        path="*"
        element={
          <RequireAuth>
            <SignalRProvider>
                <GameProvider>
              <MenuPage />
                </GameProvider>
            </SignalRProvider>
          </RequireAuth>
        }
      />
    </Routes>
  </AuthProvider>
    </Provider>
);

export default App;
