import { galada } from "../../../fonts/fonts";

const About = () => {
    return (
        <div className="about w-full my-24 pb-24 pt-5 text-white">
            <h1 className={`${galada.className} text-[40px] tracking-wider font-extrabold md:text-[80px] xl:text-[120px] text-red-50`}>Sobre Nosotros</h1>
            <span className="px-4 flex text-center text-[20px] md:text-[25px] md:px-24 xl:text-[35px] xl:px-48">
                En Sabe aMOR nos dedicamos a ofrecerte lo mejor de la flor de jamaica, un ingrediente natural lleno de sabor, color y beneficios para la salud. Nuestra misión es acercarte a este delicioso y versátil producto, cultivado con el máximo cuidado para garantizar su frescura y calidad. Ya sea que busques disfrutar de una bebida refrescante, un ingrediente para tus recetas o simplemente explorar los muchos beneficios que la flor de jamaica puede ofrecerte, estás en el lugar adecuado. ¡Déjate llevar por la magia de la jamaica y descubre todo lo que puede aportar a tu vida!
            </span>
        </div>
    );
}

export default About;