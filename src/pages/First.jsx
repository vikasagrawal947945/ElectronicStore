import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function First(){
     return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
     )
}
export default First;