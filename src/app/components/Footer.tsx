import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    // Get current year 
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-nav-footer py-1 w-full flex flex-col bottom-0 items-center justify-center text-center text-white bg-red-800" >
            <div className="p-5 mb-5  flex flex-col justify-center items-center">
                <h1 className="mb-10 text-[25px] md:text-[50px] border-b-2">
                    Llámanos
                    <br />
                    (+52) 777 - 283 - 3780</h1>
                <Image src="/logo-t.png" alt='' width={350} height={350} className="float my-10 p-1 bg-white rounded-3xl bg-opacity-90" />
                <p className="text-[20px] md:text-[25px] border-b-2">sabeamorjamaica@gmail.com</p>
            </div>
            {/* Social Media */}
            <div className="float mb-5 flex gap-5 justify-center items-center">
                <a href="https://www.facebook.com/sabeamor.mx" target="_blank" rel="noopener noreferrer">
                    <CiFacebook className="size-10 md:size-14 opacity-30 hover:opacity-100 transition-all ease-linear" />

                </a>
                <a href="https://www.instagram.com/sabeamor.mx" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="size-10 md:size-14 opacity-30 hover:opacity-100 transition-all ease-linear" />
                </a>
            </div>
            <div className="text-[12px] flex flex-col sm:flex-row sm:gap-2">
                <h1 className="uppercase">
                    &copy; {currentYear} Sabe aMOR.
                </h1>
                <p>
                    All rights reserved.{" "}
                </p>
            </div>
        </div >

    );
}

export default Footer;