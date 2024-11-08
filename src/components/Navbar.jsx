import { NavLink, useNavigate } from "react-router-dom"
import {assets} from "../../src/assets/assets"
import { createContext, useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/auth";
import { appContext } from "../Context/AppContex";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";


const Navbar = () =>{
    const {token,setToken} = useContext(appContext)
    const navigate = useNavigate();
    const name = useSelector(store =>store?.login?.username)
    const userDetails = useSelector(store=>store?.login?.userDetails)
    console.log(userDetails)
   



    const handleLogout = async () =>{
        try{
             await signOut(auth)
             toast.success("logged out")
           
        }
        catch(e){

        }
    }

   


    return(
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400">
          <img onClick={()=>navigate("/")} className="w-44 cursor-pointer bg-white p-2 rounded" src={assets.fitshapers_logo_white} />
          <ul className="hidden md:flex items-start gap-5 font-medium">
            <NavLink to="/">
                <li className="py-1">HOME</li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/trainer">
                <li className="py-1">TRAINERS</li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/about">
                <li className="py-1">ABOUT</li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/contact">
                <li className="py-1">CONTACT</li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/admin">
                <li className="py-1">ADMIN</li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/reviews">
                <li className="py-1">FEEDBACK   </li>
               <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
          </ul>
          <div className="flex items-center gap-4">
            {
                token ? 
                <div className="flex items-center cursor-pointer gap-2 group relative">
                    <p >{userDetails.displayName}</p>
                    <img className="w-8 rounded-full" src={userDetails.photoURL} />
                    <img className="w-2.5"  src={assets.dropdown_icon}/>
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p onClick={()=>navigate("/profile")} className="hover:text-black cursor-pointer">Profile</p>
                       <p onClick={()=>navigate("/appointments")}  className="hover:text-black cursor-pointer">Appointments</p>
                       <p onClick={()=>{setToken(false); handleLogout();navigate("/login")}} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                      
                    </div>
                </div> : 
                <>
                <button  className="bg-red-600 text-white px-8 py-3 rounded-full font-light hidden md:block"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnoHXFALJrMcOFdPaqKwJfTYzUzluHWj3n6DLISrn0Ge5b-g/viewform?usp=sf_link"  target="_blank"
    rel="noopener noreferrer">Enroll Now</a></button>
                <button onClick={()=>navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
                </>
                
            }
             </div>
        </div>
    )
}

export default Navbar;