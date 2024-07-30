import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './output.css';
import React, { useEffect } from 'react'
import Layout from './layout/Layout';
import Loading from './Loading';
import AOS from 'aos';
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const Team = lazy(() => import('./Components/Team/Team'));
const Blog = lazy(() => import('./Components/Blog/Blog'));
const ContactUsUs = lazy(() => import('./Components/Contacts/Contact'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));


function App() {
  useEffect(() => {
    
    AOS.init({
      duration:1000
    })
  }, [])
  let routes = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Suspense fallback={<Loading/>}><Home/></Suspense>},
        {path:'about', element:<Suspense fallback={<Loading/>}><About/></Suspense>},
        {path:'services', element:<Suspense fallback={<Loading/>}><Services/></Suspense>},
        {path:'team', element:<Suspense fallback={<Loading/>}><Team/></Suspense>},
        {path:'blog', element:<Suspense fallback={<Loading/>}><Blog/></Suspense>},
        {path:'contact', element:<Suspense fallback={<Loading/>}><ContactUsUs/></Suspense>},
        {path:'*', element:<Suspense fallback={<Loading/>}><NotFound/></Suspense>},
      ]
    }
  ])
  return (
    <>
 
 <RouterProvider router={routes}></RouterProvider>
    
    </>
  );
}

export default App;
