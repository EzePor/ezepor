"use client"
import React, { useState } from 'react'
import Link from 'next/link'



const NavBar = () => {
    const [isClick, setIsClick] = useState(false);

    const toogleNavBar = () => {
      setIsClick(!isClick);
    }
  return (
    <div>
        <nav className="bg-colorOscuro mb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center  ">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <img src="./iconos/EP_logo.png" alt="" className=" w-10 h-auto bg-white rounded-md  " />
              </Link>
            </div>
          </div>
          <div className="hidden md:block ">
            <div className="ml-4 flex items-center space-x-16 ">
              <Link href="/" className=" p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg   ">
                <img src="./iconos/inicioB.png" alt="" className=" w-10 h-auto text-white   " />
              </Link>

              <Link href="/acerca" className=" p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg  " >
              <img src="./iconos/acercaB.png" alt="" className=" w-8 h-auto text-white   " />
              </Link>

              <Link href="/proyectos" className=" p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg    ">
              <img src="./iconos/proyectosB.png" alt="" className=" w-8 h-auto text-white    " />
              </Link>

              <Link href="/videosYoutube" className=" p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg    ">
              <img src="./iconos/videoYoutubeB.png" alt="" className=" w-8 h-auto text-white   " />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center ">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white
             hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white " onClick={toogleNavBar} >{isClick?(<svg  className="h-6 w-6"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor" >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M6 18L18 6M6 6l12 12"/>
</svg>):( <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
</svg>)}

            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
          <Link href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2  ">
                INICIO
              </Link>

              <Link href="/acerca" className="text-white block hover:bg-white hover:text-black rounded-lg p-2  ">
                ACERCA DE 
              </Link>

              <Link href="/proyectos" className="text-white block hover:bg-white hover:text-black rounded-lg p-2  ">
               PROYECTOS
              </Link>

              <Link href="/contacto" className="text-white block hover:bg-white hover:text-black rounded-lg p-2  ">
                VIDEOS 
              </Link> 
          </div>
        </div>
      )}
    </nav>
      
    </div>
  )
}

export default NavBar
