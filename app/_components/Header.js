import React from 'react'

function Header() {
  return (
    
        <header className="bg-white w-full fixed top-0 z-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-evenly">
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
            </div>
        </div>
    </header>

  )
}

export default Header
