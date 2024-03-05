"use client"
import React, { useState } from 'react'
import {getAuth , signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth'
import { app } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import { doc, getFirestore, setDoc } from "firebase/firestore";

function SignIn() {
    const router = useRouter();
    const [activeBtn,setActiveBtn] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState();
    const [OTP,setOTP] = useState();
    const [fname,setFname] = useState();
    const [lname,setLname] = useState();
    const sendOTP = async() => {
        let number  = "+91 " + phoneNumber;
        setActiveBtn(true);
        const auth = getAuth(app);
        const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{});
        signInWithPhoneNumber(auth, number,recaptcha).then((confirmationResult) => {
            window.confirmationResult = confirmationResult     
        }).catch((err) => {
            console.log("Error occured sendotp " + err);
        })
    }
   const verifyOTP = () => {
    window.confirmationResult.confirm(OTP)
        .then((result) => {
            const user = result.user;
            addUserData(user.uid);
            router.push('/Signup')
        })
        .catch((error) => {
            console.error("Error occurred in verifyOTP:", error);
        });
}

const addUserData = async(uid) => {
    const db = getFirestore(app);
    try{
        const docref = await setDoc(doc(db,"User", phoneNumber), {
            PhoneNumber : "+91 " + phoneNumber,
            Uid: uid,
            Name : fname + " " + lname
        })
        console.log("Document written with id "+ docref.id);
    }catch(err){
        console.log("Error is " + err);
    }
}

  return (
    <div>
            <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                    alt=""
                    src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className="absolute inset-0 h-full w-full object-cover"
                />
                </aside>

                <main
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                <div className="max-w-xl lg:max-w-3xl">
                    <a className="block text-blue-600" href="#">
                        <span className="sr-only">Home</span>
                    </a>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to Real-Estate 🏠
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                    Enter all details Accurately and correctly.
                    </p>

                <div className='mt-8 grid grid-cols-6 gap-6'>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        First Name
                        </label>

                        <input
                        type="text"
                        onChange={(event)=>setFname(event.target.value)}
                        className="mt-1 w-full rounded-md h-10 p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                        </label>

                        <input
                        type="text"
                        onChange={(event) => setLname(event.target.value)}
                        className="mt-1 w-full h-10 p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 flex flex-col">
                        
                        <label htmlFor="countryCode">Phone Number</label>
                        
                        <div className='flex gap-2'>
                            <input type="tel" value={"+91"}
                            className='mt-1 w-16 h-10 p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'/>
                            
                            <input
                            type="tel"
                            placeholder='Eg: 98 XXXX XXXX'
                            onChange={(event)=>setPhoneNumber(event.target.value)}
                            className="mt-1 w-full h-10 p-3  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className={`col-span-6 ${activeBtn==false?'hidden':'visible'}`}>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> OTP </label>
                       
                        <input
                        type="tel"
                        onChange={(event)=>setOTP(event.target.value)}
                        placeholder='One Time Password'
                        className="mt-1 h-10 p-3     rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />

                        <button onClick={verifyOTP} className='p-2 bg-teal-600 border border-black rounded-md ml-4 text-white'>Verify OTP</button>
                    </div>
                    <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                        By creating an account, you agree to our
                        <a href="#" className="text-gray-700"> <strong className='underline'>terms and conditions</strong> </a>
                        and
                        <a href="#" className="text-gray-700"> < strong className='underline'> privacy policy</strong></a>.
                        </p>
                    </div>
                    <div id='recaptcha'></div>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        onClick={sendOTP}
                        >
                        {activeBtn == false ? "Create Account" :  "Validate OTP"  }
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                            Already have an account? 
                        <a href="/Signup" className="text-gray-700 underline">Log in</a>.
                        </p>
                    </div>
                    </div>
                </div>
                </main>
            </div>
            </section>
    </div>
  )
}

export default SignIn
