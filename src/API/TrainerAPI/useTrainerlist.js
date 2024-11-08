import { collection } from "firebase/firestore";
import { db } from "../../Auth/auth";
import { getDocs} from "firebase/firestore"
import { useEffect, useState } from "react";


const useTrainerlist = () =>{
    const [trainerlist,setTrainerList] = useState([])



    useEffect(()=>{
        async function fetchTrainers() {
            try{
                const response = collection(db,"trainerlist")
                const data = await getDocs(response);
                const list = data.docs.map(doc =>{
                 return{
                   id:doc.id,
                   ...doc.data()
                 }
                })
                setTrainerList(list)
               }
               catch(e){  
                console.log(e)
               }
        }
        fetchTrainers();
        },[trainerlist])
    
    
        return  [trainerlist]
}

export default useTrainerlist;