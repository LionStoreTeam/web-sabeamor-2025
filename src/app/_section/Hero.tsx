"use client"
import { TypeAnimation } from "react-type-animation";
import { galada } from "../../../fonts/fonts";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero w-full">
            <div className="py-20 px-2 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
                <h1 className={`${galada.className} text-[40px] tracking-wider font-extrabold md:text-[80px] xl:text-[120px] text-red-50`}>Flor de Jamaica</h1>
                <span className="text-[20px] md:text-[25px] xl:text-[35px]">
                    <TypeAnimation
                        sequence={[
                            'Bienvenidos a Sabe aMOR, donde la flor de jamaica es la protagonista.',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </span>
                <Image src="/logo-t.png" alt="" width={500} height={500} priority className="float my-14 bg-white bg-opacity-20 rounded-full" />
            </div>
        </div>
    );
}

export default Hero;