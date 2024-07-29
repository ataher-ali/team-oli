import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import ErrorPage from './Pages/404/ErrorPage.jsx';
import Team from './Pages/Team/Team.jsx';
import Archive from './Pages/Archive/Archive.jsx';
import { ThemeProvider } from "@material-tailwind/react";
import Product from './Pages/Product/Product.jsx';
import Service from './Pages/Service/Service.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/team",
        element: <Team></Team>
      },
      {
        path:"/archive",
        element: <Archive></Archive>
      },
      {
        path:"/product",
        element: <Product></Product>
      },
      {
        path:"/Service",
        element: <Service></Service>
      }

    ]
  },
  {
    path:"/*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
