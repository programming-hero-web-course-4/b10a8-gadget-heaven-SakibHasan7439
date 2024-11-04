import {
    createBrowserRouter,
  } from "react-router-dom";
  
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>
   }
])

export default Router;