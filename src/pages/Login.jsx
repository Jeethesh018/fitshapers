import { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth, googleProvider } from "../Auth/auth";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { appContext } from "../Context/AppContex";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../Store/loginSlice";
import { db } from "../Auth/auth";
import { collection } from "firebase/firestore";
import useAddUser from "../API/UserAPI/useAdduser";

const Login = () => {
  const [state, setState] = useState("Login"); 
  const [showPopUp, setShowPopUp] = useState(false); 
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const { setToken } = useContext(appContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addUser] = useAddUser();

  
  const isSignUpValid = name && email && password && rePassword && password === rePassword;
  const isLoginValid = email && password;

  const onSubmit = async (e) => {
    e.preventDefault();
    state === "Sign Up" ? handleSignUp() : handleLogin();
  };

  const handleSignUp = async () => {
    if (password !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created", userCredential.user.email);
      await sendEmailVerification(userCredential.user);
      toast.success("Verification email sent", userCredential.user.email);
      dispatch(saveUser(userCredential.user));
      userCredential.user.displayName = name;

      let  userobj = {
        displayName: userCredential.user.displayName || '',
        email: userCredential.user.email || '',
        uid: userCredential.user.uid,
        photoURL: userCredential.user.photoURL || '',
        phoneNumber: userCredential.user.phoneNumber || '',
        emailVerified: userCredential.user.emailVerified,
        providerId: userCredential.user.providerId,
        lastLoginAt: userCredential.user.metadata.lastSignInTime,
        createdAt: userCredential.user.metadata.creationTime,
      }
      addUser(userobj)
      console.log(userobj)
    } catch (e) {
      toast.error("Sign up error", e.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", userCredential.user.email);
      setToken(true);
      navigate("/");
      dispatch(saveUser(userCredential.user));
      userCredential.user.displayName = name;
    } catch (e) {
      console.log("Login error", e.message);
    }
  };

  const googleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google:", userCredential.user.email);
      dispatch(saveUser(userCredential.user));
      setToken(true);
      navigate("/");
    } catch (e) {
      toast.error("Google login error", e.message);
    }
  };

  // Switch between Sign Up and Login states
  const switchState = (newState) => {
    if (newState === "Sign Up") {
      setShowPopUp(true); 
    }
    setState(newState);
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "Sign Up" ? "Sign Up" : "Sign In"} to book an Appointment</p>

        {/* Modal Pop-Up */}
        {showPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-[2000ms] ease-in-out">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-[2000ms] ease-in-out">
          <p className="text-lg mb-4">Please Enroll before creating an account</p>
            <button  onClick={() => setShowPopUp(false)}  className="bg-red-600  text-white ml-[90px] px-8 py-3 rounded-full font-light hidden md:block"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnoHXFALJrMcOFdPaqKwJfTYzUzluHWj3n6DLISrn0Ge5b-g/viewform?usp=sf_link"  target="_blank"
    rel="noopener noreferrer">Enroll Now</a></button>
            </div>
          </div>
        )}

        {state === "Sign Up" && (
          <div className="w-full">
            <p>
              Full Name <span className="text-red-400">*</span>
            </p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="w-full">
          <p>
            Email <span className="text-red-400">*</span>
          </p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p>
            Password <span className="text-red-400">*</span>
          </p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>
              Re-Password <span className="text-red-400">*</span>
            </p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-2 rounded-md text-base ${
            (state === "Sign Up" && isSignUpValid) || (state === "Login" && isLoginValid)
              ? "bg-primary text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={state === "Sign Up" ? !isSignUpValid : !isLoginValid}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => switchState("Login")} className="text-primary underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => switchState("Sign Up")} className="text-primary underline cursor-pointer">
              Sign Up here
            </span>
          </p>
        )}

        <button
          type="button"
          onClick={googleLogin}
          className="border border-gray-800 text-color w-full py-2 rounded-md text-base flex items-center justify-center space-x-2"
        >
          <img src={assets.google} className="h-5 w-5" alt="Google logo" />
          <span>Sign In with Google</span>
        </button>
      </div>
    </form>
  );
};

export default Login;
