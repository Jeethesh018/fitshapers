import { Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Trainer from "./pages/Trainer"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MyProfile from "./pages/MyProfile"
import MyAppointment from "./pages/MyAppointment"
import Appointment from "./pages/Appointment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Admin from "./pages/Admin"
import Reviews from "./pages/reviews"
function App() {

  return (
    <div className=" sm:mx-[5%]" >
      <Navbar/>
      <hr/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="*" element={<Home/>} /> */}
      <Route path="/trainer" element={<Trainer/>} />
      <Route path="/trainer/:speciality" element={<Trainer/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<MyProfile/>} />
      <Route path="/appointments" element={<MyAppointment/>} />
      <Route path="/newAppointment/:trainerId " element={<Appointment/>} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
