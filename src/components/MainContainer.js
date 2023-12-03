import React from 'react'
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const MainContainer = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<LoginPage />
    },
    {
      path:"/landingPage",
      element:<LandingPage />,
      
    },
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
      
        
    </div>
  )
}

export default MainContainer;