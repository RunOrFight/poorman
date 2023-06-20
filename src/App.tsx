import {Route, Routes} from "react-router-dom";
import {AuthPage, GamePage, MenuPage} from "./pages";
import {AuthProvider, SignalRProvider, GameProvider} from "./services";
import {RequireAuth} from "./widgets";
import {Provider} from "react-redux";
import {setupStore} from "./store";

const store = setupStore()
const App = () => (
    <Provider store={store}>
            <AuthProvider>
                <SignalRProvider>
                <Routes>
                    <Route path="/login" element={<AuthPage type="login"/>}/>

                    <Route
                        path="/game/:id"
                        element={
                            //<RequireAuth>
                            <GameProvider>
                                <GamePage/>
                            </GameProvider>
                            //</RequireAuth>
                        }
                    />

                    <Route
                        index
                        path="*"
                        element={
                            <RequireAuth>
                                <GameProvider>
                                    <MenuPage/>
                                </GameProvider>
                            </RequireAuth>
                        }
                    />
                </Routes>
        </SignalRProvider>
    </AuthProvider>
    </Provider>
);

export default App;
