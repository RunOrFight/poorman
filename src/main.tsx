import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import { setupStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const { store, history } = setupStore();

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);
