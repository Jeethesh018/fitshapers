import { doc } from "firebase/firestore";
import { db } from "../../Auth/auth";
import { updateDoc } from "firebase/firestore/lite";

const useUpdateUser = () => {

    const editTrainer = async (value,id) =>{
       const response = doc(db,"userlist",id)
      await updateDoc(response,value)
    }

    return [editTrainer]

}

export default useUpdateUser;