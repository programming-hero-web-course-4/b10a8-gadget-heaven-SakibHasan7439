import {
    createBrowserRouter,
  } from "react-router-dom";
  
import MainLayouts from "../pages/MainLayouts";

const Router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayouts></MainLayouts>
   }
])

export default Router;