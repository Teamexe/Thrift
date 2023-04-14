import React from 'react'
import { useState } from 'react';
// import { Routes, Route } from "react-router-dom";
import '../css/Main.css';
import { Link } from "react-router-dom";

const Main = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 640);
  });

    
    return (
        <>
        <div className="absolute z-10 right-0 hidden lg:block">
        <img src="/Vector3.png" alt="vectorimage" className='backgroundSize-cover background-position-center' />
        </div>
        <div className="relative bg-white overflow-hidden">
      <div id="main" className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 relative z-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 id="mainheading" className=" lg-mt-14 sm:-mt-0 text-4xl font-rokkitt font-extrabold tracking-tight text-gray-900 sm:text-6xl relative z-20 leading-[50px]">
            Donate and sell
            your Old books
            </h1>
            <p className="mt-4 text-xl text-gray-500 relative z-20 ">
           <strong>"Always give without remembering and always receive without
            forgetting."</strong><br></br>
            Thrift is a humanitarian effort dedicated to promoting literacy by
            offering "FREE OLD BOOKS" to learners.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className={`pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full ${isSmallScreen ? 'hidden' : ''}`}
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 z-20 mt-36">
                  <div className="flex items-center space-x-6 lg:space-x-8 ">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 ">
                        <img
                          src="/maths2.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/phy.png"
                          alt=""
                          className="w-full h-full object-center object-cover border"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-46 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/story2.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-46 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/kids2.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-46 h-64 rounded-lg overflow-hidden ">
                        <img
                          src="/story.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/jee2.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-46 h-64 rounded-lg overflow-hidden">
                        <img
                          src="/maths.jpeg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
  <button id="Donate" className="donate-now-button w-full xs:w-auto inline-block text-center font-bold text-xl bg-skin-lightGreen border border-transparent rounded-md py-3 px-10 text-skin-darkGreen hover:bg-skin-hoverGreen transition-all">
    <Link to="/book/list" className="text-skin-darkGreen">
      <strong>Donate Now</strong>
    </Link>
  </button>
  <button id="Donate2" className="donate-to-ngo-button block mt-5 px-[5.4rem] text-center font-bold text-xl border-4 border-[#155D18] rounded-md py-3 text-skin-darkGreen hover:bg-[#155D18] hover:text-skin-lightGreen transition-all">
  <Link to="/geolocation" className="text-skin-darkGreen">
    Donate to NGO
    </Link>
  </button>

              
            </div>
          </div>
        </div>
      </div>
    </div> 
        </>
    )
}

export default Main