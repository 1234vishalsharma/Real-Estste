
"use client"
import React , {useState, useEffect} from 'react'

function Siteview({params}) {

    const [file,setFile] = useState()
    useEffect(()=>{
      console.log("file id is here "+params?.cid);
      params?.cid&&getData();
    },[])


    const getData = async()=>{
        // todo to be implemented
    }

  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>Dynamic Site-Visit Page {params.cid}</h3>
    </div>
  )
}

export default Siteview
