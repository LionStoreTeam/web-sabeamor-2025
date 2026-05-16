"use client"

import { MessageCircleMoreIcon } from "lucide-react";
import { whatsappUrl } from "../components/ContactWhatsappButton";
import { galada, poppins } from "../../fonts/fonts";

const Hero = () => {
    return (
        <section className={`${galada.className} her-bg w-full`}>
            <div className="py-24 flex flex-col justify-center items-center text-center text-white bg-black/60 md:py-52">
                <span className="flex items-center justify-center text-center gap-2 bg-rose-100 rounded-full p-1 pr-3 animate-heartbeat">
                    <p className="bg-rose-700 text-white text-md px-3 py-1 rounded-full text-center">
                        100 % ♥
                    </p>
                    <p className="flex items-center gap-2 text-rose-600">
                        <span className='text-xl'>Venta de flor de jamaica</span>
                    </p>
                </span>

                <h1 className="text-center text-slate-200 text-4xl md:text-[126px] font-semibold max-w-5xl leading-tight bg-clip-text my-2.5 px-4">
                    Mi <span className='bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent'>Jamaica</span> no tiene alma, el alma se la pongo yo.
                </h1>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${poppins.className} my-5 flex gap-3 px-8 py-3 bg-rose-600 text-white rounded-full text-lg items-center text-center hover:scale-105 transition-all ease-linear`}
                    aria-label="Contactar por WhatsApp"
                >
                    <MessageCircleMoreIcon className="w-8 h-8 animate-pulse" />
                    <span className="">Contactar vía WhatsApp</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;