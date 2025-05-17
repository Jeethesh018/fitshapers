import { collection } from "firebase/firestore";
import { db } from "../../Auth/auth";
import { getDocs} from "firebase/firestore"
import { useEffect, useState } from "react";


const useReviewList = () =>{
    const [reviewList,setReviewList] = useState([])



    useEffect(()=>{
        async function fetchReviews() {
            try{
                const response = collection(db,"reviewlist")
                const data = await getDocs(response);
                const list = data.docs.map(doc =>{
                 return{
                   id:doc.id,
                   ...doc.data()
                 }
                })
                setReviewList(list)
               }
               catch(e){  
                console.log(e)
               }
        }
        fetchReviews();
        },[reviewList])
    
    
        return  [reviewList]
}

export default useReviewList;