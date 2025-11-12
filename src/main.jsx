import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index : true,
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contacts",
        element : <Contacts />
      },
      {
        path : "/blog",
        element : <Blog />
      },
      {
        path : "/projects",
        element : <Projects />
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

