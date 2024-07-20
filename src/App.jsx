import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './output.css';
import Layout from './layout/Layout';
import Loading from './Loading';
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const Team = lazy(() => import('./Components/Team/Team'));


function App() {
  let routes = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Suspense fallback={<Loading/>}><Home/></Suspense>},
        {path:'about', element:<Suspense fallback={<Loading/>}><About/></Suspense>},
        {path:'services', element:<Suspense fallback={<Loading/>}><Services/></Suspense>},
        {path:'team', element:<Suspense fallback={<Loading/>}><Team/></Suspense>},
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
