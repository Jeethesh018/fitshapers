
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Auth/auth";

const useAddReviews = () =>{


    const addReview = async (value) =>{
        try{
         const reviewer = collection(db,"reviewlist")
        await addDoc(reviewer,value)
        }
        catch(e){
         console.log(e)
        }
 }


    return [addReview]
}

export default useAddReviews;