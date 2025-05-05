import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Electronic from "./Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Login from "../pages/login";
import First from "../pages/First";
import SingleProduct from "./SingleProduct";
const router = createBrowserRouter([
  {
    path:"/",
   element : <First></First>,
   children :[ 
    {
       index: true,
       element : <Electronic></Electronic>
    },
    {
      path:"/About",
      element : <About></About>
    },
  
    {
      path:"/Home",
      element : <Electronic></Electronic>
    },
    {
      path : "/Cart",
      element:  <Cart></Cart>
    },
    {
      path :"/login",
      element : <Login></Login>
    },
    {
      path :"/product/:id",
      element : <SingleProduct></SingleProduct>
    }
   ]
  },
 
])

function Main(){
   return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
   )
}
export default Main;