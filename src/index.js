import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routerr';
import { RouterProvider } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}>
        <App />
    </RouterProvider>
);

