"use client"

import { app } from '@/firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SignUp() {
    const [phoneNumber,setPhoneNumber] = useState();

    const router = useRouter(); 
    const validateUser = async() => {
        const db = getFirestore(app);
        const querrysnapshot = await getDocs(collection(db,"User"));
        try{
            querrysnapshot.forEach((doc) => {
                if(doc.id == phoneNumber){
                    console.log("User Found in db");  
                    setTimeout(() => {
                        router.push('/Dashboard')
                    }, 1000);
                }
            });
        }catch(err){ 
            console.log(" Error occured ");
        }
    }
  return (
    <div className='grid grid-cols-2 h-screen w-screen'>
        <div className='w-full h-full pt-32 border-black border-r-2 pr-8 pl-8 bg-cyan-600'>
            <h1 className='flex justify-center text-3xl'>Login to Real-Estate 🏠</h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nisi dolorum nemo nulla deserunt voluptates quisquam ut quae asperiores libero.</p>
        </div>
        <div className='flex flex-col pt-40 items-start pr-8 pl-8 bg-slate-400'>
            <h1 className='text-3xl text-center w-full mt-8 mb-12 font-serif font-semibold text-gray-600'>SignUp</h1>
            <label htmlFor="UserEmail" className="block text-md font-medium text-gray-700"> Phone Number </label>

            <input
                type="tel"
                placeholder="Registered Contact Number"
                onChange={(event)=>setPhoneNumber(event.target.value)}
                className="mt-2 w-80 h-16 outline-none border-black border-2 p-3 text-xl rounded-md  sm:text-sm"
            />
            <button onClick={validateUser} className='border rounded-md border-black p-4 bg-teal-600 text-white mt-8 hover:bg-white hover:text-teal-600'>Go Inside</button>
            <p className='mt-4'>Dont Have an Account? <strong> <a className='text-gray-600 underline ' href="/Signin"> Create One</a></strong></p>
        </div>
    </div>
  )
}

export default SignUp ;
