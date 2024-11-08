import {  deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Auth/auth";

const useDeleteUser = () =>{


    const deleteUser = async (id) =>{
        await deleteDoc(doc(db,"userlist",id))
    }


    return [deleteUser]
}

export default useDeleteUser;