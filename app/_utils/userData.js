import { app } from '@/firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React from 'react'

function UserData() {
    const [user,setUser] = useState();
    const getUserData = async() => {
        const db = getFirestore(app);
        const querrysnapshot = await getDocs(collection(db,"User"));
        try{
            querrysnapshot.forEach((doc) => {
                if(doc.id == phonenumber){
                    setUser(doc.data());
                }
            });
        }catch(err){ 
            console.log(" Error occured ");
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default UserData;
