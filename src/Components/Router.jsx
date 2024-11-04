import {
    createBrowserRouter,
  } from "react-router-dom";
  
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";

const Router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },

      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
   }
])

export default Router;