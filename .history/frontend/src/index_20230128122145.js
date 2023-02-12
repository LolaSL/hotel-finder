import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PlaceContextProvider } from './context/PlaceContext';
import { HotelsContextPr } from './context/HotelsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlaceContextProvider>
      <Provider store={store}>
        <HotelsContextProvider>
          <App />
        </HotelsContextProvider>
      </Provider>
    </PlaceContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();