import React from 'react'
import Image from 'next/image';
import Card from './Card';

const Banner = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
        <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
         className='w-full h-96  object-cover ' alt="... loading" />


        <div className='grid grid-cols-4 pl-16 pr-16 absolute top-1/3 gap-8  w-full'>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
            <Card img={null} price={null} parking={null} bathroom={null} bedroom={null} cid={null}/>
        </div>

    </div>
  )
}

export default Banner
