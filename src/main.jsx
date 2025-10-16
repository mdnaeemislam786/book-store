
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home/Home';
import ReactDOM from "react-dom/client";
import About from './Pages/About/About';
import App from './App';
import Login from './Component/Login';
import Register from './Component/Register';
import Posts from './Pages/Posts/Posts';
import Contact from './Pages/Contact/Contact';
import Authentication from './Pages/Authentication/Authentication';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/posts", Component: Posts },
      { path: "/contact", Component: Contact },
      { path: "/authentaction",
         Component: Authentication,
         children: [
          {
            path: '/authentaction/login',
            Component: Login,
          },
          {
            path: '/authentaction/register',
            Component: Register,
          },
         ]
         },
      
    ]
  }
])
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);