import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Image from 'next/image';


const Navbar = () => {
    return (
        <div className="w-full px-5 py-4 flex flex-col justify-between items-center text-white bg-red-700 sm:py-2 sm:px-20 sm:flex-row drop-shadow-xl">
            <Image src="/logo-t.png" alt="" width={70} height={70} className="bg-white bg-opacity-90 rounded-full" />
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-10 sm:mt-0">
                <span className="flex gap-2 justify-center items-center text-center">
                    <BsTelephone className="size-5" />
                    (+52) 777 - 283 - 3780
                </span>
                <span className="flex gap-2 justify-center items-center text-center">
                    <CiMail className="size-5" />
                    sabeamorjamaica@gmail.com
                </span>
            </div>

        </div>
    );
}

export default Navbar;