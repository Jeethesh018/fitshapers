import {  collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Auth/auth";

const useEditTrainer = () =>{

    const editTrainer = async (value,id) =>{
        try{
         const data = doc(db,"trainerlist",id)
        await updateDoc(data,value)
        }
        catch(e){
         console.log(e)
        }

 }


    return [editTrainer]
}

export default useEditTrainer;