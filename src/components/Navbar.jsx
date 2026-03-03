import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../src/assets/assets";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/auth";
import { appContext } from "../Context/AppContex";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/trainer", label: "TRAINERS" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
  { to: "/admin", label: "ADMIN" },
  { to: "/reviews", label: "FEEDBACK" },
];

const Navbar = () => {
  const { token, setToken } = useContext(appContext);
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store?.login?.userDetails);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out");
    } catch {
      toast.error("Unable to log out right now");
    }
  };

  return (
    <div className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between text-sm py-3 mb-3">
        <img
          onClick={() => {
            navigate("/");
            setMobileOpen(false);
          }}
          className="w-40 sm:w-44 cursor-pointer bg-white p-2 rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          src={assets.fitshapers_logo_white}
          alt="FitShapers"
        />

        <ul className="hidden md:flex items-start gap-6 font-medium text-gray-700">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="group">
              <li className="py-1 transition-colors duration-200 group-hover:text-primary">{item.label}</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden transition-all duration-300" />
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {token ? (
            <div className="flex items-center cursor-pointer gap-2 group relative">
              <p className="hidden sm:block max-w-32 truncate">{userDetails?.displayName || "User"}</p>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={userDetails?.photoURL || assets.profile_pic}
                alt="Profile"
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="menu" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded-xl shadow-lg flex flex-col gap-3 p-4">
                  <p onClick={() => navigate("/profile")} className="hover:text-black cursor-pointer">
                    Profile
                  </p>
                  <p onClick={() => navigate("/appointments")} className="hover:text-black cursor-pointer">
                    Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      handleLogout();
                      navigate("/login");
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <button className="bg-red-600 text-white px-5 lg:px-8 py-2.5 rounded-full font-light hidden md:block transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfnoHXFALJrMcOFdPaqKwJfTYzUzluHWj3n6DLISrn0Ge5b-g/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now
                </a>
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-primary text-white px-5 lg:px-8 py-2.5 rounded-full font-light hidden md:block transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Create Account
              </button>
            </>
          )}

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-gray-200"
            aria-label="Toggle menu"
          >
            <img src={assets.menu_icon} alt="menu" className="w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden pb-4 animate-fade-in-down">
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-1 rounded-md hover:bg-gray-100"
              >
                {item.label}
              </NavLink>
            ))}
            {!token && (
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
                className="bg-primary text-white px-4 py-2 rounded-full font-light w-fit"
              >
                Create Account
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
