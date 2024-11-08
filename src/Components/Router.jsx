import {
    createBrowserRouter,
  } from "react-router-dom";
  
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";
import AllProducts from "./AllProducts";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import WishList from "./wishList";
import Blog from "../pages/Blog";

const Router = createBrowserRouter([
  {
   path: '/',
   element: <MainLayouts></MainLayouts>,
   errorElement: <ErrorPage></ErrorPage>,

   children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: ()=>fetch('/categoryData.json'),
      children: [

        {
          path: 'category/:category',
          element: <AllProducts></AllProducts>,
          loader: ()=>fetch('/gadgetData.json')
        },

        {
          path: '/',
          element: <AllProducts></AllProducts>,
          loader: ()=>fetch('/gadgetData.json')
        },

      ]
    },

    {
      path: '/statistics',
      element: <Statistics></Statistics>,
      loader: ()=>fetch('/gadgetData.json')
    },

    {
      path: '/dashboard',
      element: <DashBoard></DashBoard>,
      children: [ 
        {
          path: 'cart',
          element: <Cart></Cart>,
          loader: ()=>fetch('/gadgetData.json')
        },

        {
          path: 'wishList',
          element: <WishList></WishList>,
          loader: ()=>fetch('/gadgetData.json')
        }
      ]
    },

    {
      path: '/blog',
      element: <Blog></Blog>
    },

     {
       path: 'product/:product_id',
       element: <ProductDetails></ProductDetails>,
       loader: ()=>fetch('/gadgetData.json')
     },
   ]
  }
])

export default Router;