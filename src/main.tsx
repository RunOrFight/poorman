import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { apiUrl } from './constants';
import { SignalRContext } from './services';

const connection = new HubConnectionBuilder()
  .withUrl(`${apiUrl}/socket`)
  .withAutomaticReconnect()
  .build();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
connection
  .start()
  .then(() => {
    root.render(
      <SignalRContext.Provider value={connection}>
        <App />
      </SignalRContext.Provider>
    );
  })
  .catch(() => {
    root.render(<App />);
  });
