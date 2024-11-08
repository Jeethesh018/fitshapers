
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Auth/auth";

const useAddTrainer = () =>{


    const addTrainer = async (value) =>{
        try{
         const trainer = collection(db,"trainerlist")
        await addDoc(trainer,value)
        }
        catch(e){
         console.log(e)
        }
 }


    return [addTrainer]
}

export default useAddTrainer;