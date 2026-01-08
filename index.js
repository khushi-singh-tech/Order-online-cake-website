import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './context/UserContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
 <UserContext>
     <App />
 </UserContext>
 </Provider>
 
);


