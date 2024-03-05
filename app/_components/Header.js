import React from 'react'

function Header() {
  return (
    
        <header className="bg-white w-full fixed top-0 z-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block text-teal-600 text-2xl font-semibold" href="/">
                <span className="sr-only">Home</span>
                Real-Estate
                </a>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-md font-semibold" href="/Property"> SELL </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-md font-semibold" href="/Property"> BUY </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-md font-semibold" href="/Rentals"> RENT </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-md font-semibold" href="/Land"> PLOTS </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75 text-md font-semibold" href="/Commertials"> SHOPS </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/Signup"
                >
                    Login
                </a>

                <div className="hidden sm:flex">
                    <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/Signin"
                    >
                    Register
                    </a>
                </div>
                </div>

                <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </header>

  )
}

export default Header
