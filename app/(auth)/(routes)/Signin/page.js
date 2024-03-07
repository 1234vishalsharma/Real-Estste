import React from 'react'

import {SignIn} from '@clerk/nextjs';


function page() {

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

                <SignIn/>
            </div>
            </section>
    </div>
  )
}

export default page
