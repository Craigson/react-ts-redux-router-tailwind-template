import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Demo } from './routes/Demo';

import './App.css';

import Layout from './routes/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404: Page Not Found</div>,
    children: [
      {
        path: "",
        element: <Demo />,
      },
    ]
  }]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
