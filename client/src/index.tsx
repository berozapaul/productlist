import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';

import './index.css';
import App from './App';
import ProductList from "./ProductList";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<ProductList />*/}
  </React.StrictMode>,
  document.getElementById('root')
)
