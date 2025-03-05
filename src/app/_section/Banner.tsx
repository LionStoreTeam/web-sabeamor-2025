import { galada } from "../../../fonts/fonts";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="banner w-full my-20 px-4">
            <h1 className={`${galada.className} text-[40px] tracking-wider font-extrabold md:text-[80px] xl:text-[120px] text-red-800`}>Jamaica mexicana</h1>
            <div className="">
                <div className="py-2 pl-4 m-2 flex flex-col justify-center items-center text-center">
                    <div className="">
                        <Image src="africa.svg" alt="africa-icon" width={200} height={200} priority className="p-1 bg-white rounded-xl" />
                    </div>
                    <div className="">
                        <h2 className="text-[40px] font-extrabold pt-5 md:pt-10 md:text-[60px] xl:text-[80px]">Origen</h2>
                        <p className="text-[20px] md:text-[30px] md:w-[500px] xl:text-[50px] xl:w-[900px]">El lugar que vio nacer a la flor de jamaica fue el África Tropical, es decir Egipto, Sudán y Senegal.</p>
                    </div>
                </div>
                <div className="py-2 pl-4 m-2 flex flex-col justify-center items-center text-center">
                    <div className="">
                        <Image src="flower-3.svg" alt="africa-icon" width={200} height={200} priority />
                    </div>
                    <div className="">
                        <h2 className="text-[40px] font-extrabold pt-5 md:pt-10 md:text-[60px] xl:text-[80px]">México</h2>
                        <p className="text-[20px] md:text-[30px] md:w-[500px] xl:text-[50px] xl:w-[900px]">La flor de jamaica llagó a México a bordo del Nao de China. Actualmente los principales productores son Guerrero y Oaxaca.</p>
                    </div>

                </div>
                <div className="py-2 pl-4 m-2 flex flex-col justify-center items-center text-center">
                    <div className="">
                        <Image src="bottle.svg" alt="africa-icon" width={200} height={200} priority />
                    </div>
                    <div className="">
                        <h2 className="text-[40px] font-extrabold pt-5 md:pt-10 md:text-[60px] xl:text-[80px]">Gastronomía</h2>
                        <p className="text-[20px] md:text-[30px] md:w-[500px] xl:text-[50px] xl:w-[900px]">En la cocina se utiliza para preparar antojitos mexicanos, sopas, postres, mermeladas y hasta licores.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;