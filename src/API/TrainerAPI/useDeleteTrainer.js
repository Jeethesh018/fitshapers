import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Auth/auth";


const useDeleteTrainer = () =>{

    const deleteTrainer = async (id) =>{
        try{
        await deleteDoc(doc(db,"trainerlist",id))
        }
        catch(e){
            console.log(e)
        }

    }


return [deleteTrainer]
}

export default useDeleteTrainer;