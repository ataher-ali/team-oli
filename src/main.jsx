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
import AddMember from './Pages/Admin/AddMember.jsx';
import MemberInfoCard from './Pages/Member Info Card/MemberInfoCard.jsx';


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
        path:"/Team_Member",
        element: <Team></Team>
      },
      {
        path: "/Member/:id",
        element: <MemberInfoCard></MemberInfoCard> ,
        loader: ({ params }) =>
          fetch(`http://localhost:1010/member/${params.id}`),
      },
      {
        path:"/Archive",
        element: <Archive></Archive>
      },
      {
        path:"/Product",
        element: <Product></Product>
      },
      {
        path:"/Service",
        element: <Service></Service>
      },
      {
        path:"/Add_member",
        element: <AddMember></AddMember>
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
