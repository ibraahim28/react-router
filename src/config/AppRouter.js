import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from '../layout/layout';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Profiles from '../pages/profiles';
import ProfilePage from '../pages/profile';
const Router =() => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} >
                <Route path='' element={<Home />} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='profiles' element={<Profiles/>} />
                <Route path='profiles/:id' element={<ProfilePage />} />
                
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default Router;