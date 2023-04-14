import React from 'react';
import { Link } from "react-router-dom";
import '../css/Footer.css';

const Footer = () => {
    function handleImageClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="grid md:grid-cols-5 bg-skin-lightBlue p-10 grid-cols-1 mt-10 rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className=" text-center m-auto">
                    <img className="w-56 m-auto" src="/mainlogo.png" alt="logo" />
                    <p className="hidden lg:block"> "Books fan the flames of knowledge and inspire hopes for a better
                        future."</p>
                </div>
                <div className=" m-auto text-center md:text-left my-7">

                </div>
                <div className="m-auto text-center md:text-left my-7">
                    <img src='/kids.png' alt="kids" onClick={handleImageClick} />
                </div>
                <div className="m-auto text-center md:text-left my-7">
                </div>
                <div className="m-auto text-center md:text-left my-7">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Know Us</h2>
                        <Link to="/projectdetails">
                            <div className="block py-2 hover:underline transition-all">Project Details</div>
                        </Link>
                    </div>

                    {/* <style jsx>{`a:visited {color: inherit;}`}</style> */}

                    <div>
                        <h2 className="text-xl font-bold mb-2">About Us</h2>

                        <div>
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg>
                                <span className="py-2 hover:underline transition-all pl-2"><a href="https://www.linkedin.com/in/shreya-dhiman-25a753247/" target="_blank" rel="noreferrer"> Shreya Dhiman </a></span>
                        </div>


                        <div>
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg>
                                <span className="py-2 hover:underline transition-all pl-2"><a href="https://www.linkedin.com/in/tejasvi-jatic-3565b922a/" target="_blank" rel="noreferrer">Tejasvi Jatic </a> </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-black flex justify-between items-center px-[7vw] sm:flex-row flex-col py-1 width-1px">
                <p className="text-center text-white">Copyright&copy; Thrift 2023</p>
                <p className="text-center text-white sm:pt-0 pt-4 cursor-pointer">Powered by Team .EXE, NIT Hamirpur</p>
            </div>

        </>
    )
}

export default Footer;
