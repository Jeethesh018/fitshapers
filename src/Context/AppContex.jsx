import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const appContext = createContext();


const AppContextProvider = (props) =>{
    const [token,setToken] = useState(false)
    const [name, setName] = useState('');
const [experience, setExperience] = useState('');
const [skills, setSkills] = useState([]);
const [photo, setPhoto] = useState(''); 
const [isEditing, setIsEditing] = useState(false);
const [currentTrainerId, setCurrentTrainerId] = useState(null);
    const value = {
         doctors,
         setToken,
         token,
         setName,
         name,
         experience,
         setExperience,
         skills,
         setSkills,
         photo,setPhoto,
         isEditing,
         setIsEditing,
         currentTrainerId,setCurrentTrainerId

    }


    return(
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextProvider;