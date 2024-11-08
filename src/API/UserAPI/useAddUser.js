import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Auth/auth";


const useAddUser = () =>{

    const adduser = async (value) =>{
      let response = collection(db,"userlist");
      await addDoc(response,value)
    }
 
  return [adduser];
}

export default useAddUser;