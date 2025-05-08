import { Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
//Lifting State Up = creating a state varible in a parent component nd pasing it to the parent as props is known as llifiting State Up
//props Driling = passing the varible from one component to its child and contiously repeating the process of passing from child is known as props Driling...  props drilingis always and always avoided isko hm kabhi ni krenge..

//lifiting State up very easly goes to props dreling..issi liye hm lifiting state up ka use bhi ni krenge
//hmko state vairble  pass krna hai and lifiting State Up bhi ni use kr skte " hm varible pass krne ke liye """""" """""contextApi""" ka use krenge

// iMPORTANT : Context Api is seprate(global) space to keep all the State Varibles and logic related to them...
//we create a context using createContext();
// we use the context using useContext();
function First(){
   const [cart, setCart] = useState([]); 
     return(
        <>
        <Navbar cart={cart}></Navbar>
        <Outlet setCart={setCart}></Outlet>
        </>
     )
}
export default First;