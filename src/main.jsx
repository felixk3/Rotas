import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Detalhe from './pages/Detalhe.jsx'
import Carrinho from './pages/Carrinho.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "detalhe/",
    element: <Detalhe/>,
  },
  {
    path: "carrinho/",
    element: <Carrinho/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
