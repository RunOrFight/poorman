import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { apiUrl } from './constants';
import { SignalRContext } from './services';

const connection = new HubConnectionBuilder()
  .withUrl(`${apiUrl}/socket`)
  .withAutomaticReconnect()
  .build();
connection
  .start()
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <BrowserRouter>
        <SignalRContext.Provider value={connection}>
          <App />
        </SignalRContext.Provider>
      </BrowserRouter>
    );
  })
  .catch(() => {});
