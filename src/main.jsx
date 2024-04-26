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
import Team from './Pages/Team/Team.jsx';
import Services from './Pages/Services/Services.jsx';
import Pricing from './Pages/Pricing/Pricing.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Faq from './Pages/FAQ/Faq.jsx';
import ErrorPage from './Pages/404/ErrorPage.jsx';


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
        path:"/About",
        element: <About></About>
      },
      {
        path:"/Contact",
        element: <Contact></Contact>
      },
      {
        path:"/Team",
        element: <Team></Team>
      },
      {
        path:"/Services",
        element: <Services></Services>
      },
      {
        path:"/Pricing",
        element: <Pricing></Pricing>
      },
      {
        path:"/Portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path:"/FAQ",
        element: <Faq></Faq>
      },

    ]
  },
  {
    path:"/*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
