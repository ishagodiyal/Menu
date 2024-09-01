import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Serve from './components/Serve';
import Menu from './components/Menu/Menu';
import About from './components/About';
import Amenity from './components/Amenity';
import Login from './components/Login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
       const router = createBrowserRouter([
        {
          path:"/",
          element:<><NavBar/><Home/></>
        },
        {  path:"/Serve",
          element:<><NavBar/><Serve/></>
        },
        {  path:"/Menu",
          element:<><NavBar/><Menu/></>
        },
        {  path:"/About",
          element:<><NavBar/><About/></>
        },
        {  path:"/Amenity",
          element:<><NavBar/><Amenity/></>
        },
        {  path:"/Login",
          element:<><NavBar/><Login/></>
        },
       ],
       {
        basename:"/Menu"

       }
      );

  return (

 

  <RouterProvider router={router}/>

    
  );
}

export default App;
