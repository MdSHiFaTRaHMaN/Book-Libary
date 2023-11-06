import { Link } from "react-router-dom";
import { MdFacebook, MdWhatsapp } from 'react-icons/md';
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
             <footer className="text-white bg-[#303575] body-font mx-auto">
                <div className="container px-5 py-24 mx-auto w-full lg:w-5/6 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-80 lg:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start lg:justify-center text-gray-900">
                        <img src='https://i.ibb.co/wRpVfBQ/Screenshot-2023-10-20-185606-removebg-preview.png' alt="Logo" className='w-20 lg:w-28 '  />
                        <span className="ml-3 text-2xl text-blue-700 font-semibold">ElectronicsWorld LTD</span>
                    </a>
                    <p className="mt-2 mx-auto text-sm text-white">Company and Professional registrations, Legal Services, Website Preparing, 
                    Resume Preparing Serces and all types of counsellings under one roof hastle free.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">ElectronicsWorld LTD</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-white hover:text-gray-800">Add Product</Link>
                        </li>
                        <li>
                            <a className="text-white">Add to Card</a>
                        </li>
                        <li>
                            <a className="text-white">Login/Register</a>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full block lg:block md:hidden px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">Category</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-white">History</a>
                        </li>
                        <li>
                            <a className="text-white">Novel</a>
                        </li>
                        <li>
                            <a className="text-white">Drama</a>
                        </li>
                        <li>
                            <a className="text-white">Thrilar</a>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-whitetracking-widest text-2xl mb-3">Socail Media</h2>
                        <nav className="list-none mb-10 flex justify-center gap-5 mx-auto  text-4xl text-sky-700">
                        <MdFacebook></MdFacebook>
                        <MdWhatsapp></MdWhatsapp>
                        <BsTwitter></BsTwitter>
                        </nav>
                    </div>
                    
                    </div>
                </div>
           </footer>
        </div>
    );
};

export default Footer;