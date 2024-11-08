import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Auth/auth";

const useUserlist = () => {
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
   
    const fetchingData = async () => {
      try {
        const response = collection(db, "userlist");
        const data = await getDocs(response);
        const list = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserlist(list);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

   
    fetchingData();

  }, [userlist]); 

  return [userlist];
};

export default useUserlist;
