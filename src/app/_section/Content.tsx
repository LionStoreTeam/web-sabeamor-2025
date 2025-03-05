import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { galada } from "../../../fonts/fonts";

export function Content() {
    const testimonials = [
        {
            quote:
                "La flor de jamaica es mucho más que una simple flor, es un tesoro lleno de propiedades beneficiosas para tu salud. Entre sus múltiples ventajas se incluyen:",
            name: "Beneficios que transforman tu bienestar",
            src: "/drink.jpg",
        },
        {
            quote:
                "Ayuda a combatir los radicales libres, protegiendo tu piel y tu cuerpo de los daños del envejecimiento.",
            name: "Rica en antioxidantes",
            src: "/flower.jpg",
        },
        {
            quote:
                "Contribuye a reducir la presión arterial y a mantener el colesterol en niveles saludables.",
            name: "Apoya la salud cardiovascular",
            src: "/bag-1.jpg",
        },
        {
            quote:
                "Promueve la eliminación de toxinas y favorece el buen funcionamiento del sistema digestivo.",
            name: "Desintoxicante natural",
            src: "/bag-2.jpg",
        },
        {
            quote:
                "Ideal para mejorar la salud renal y reducir la inflamación.",
            name: "Propiedades antiinflamatorias y diuréticas",
            src: "/bag-3.jpg",
        },
    ];
    return (
        <div className="px-4">
            <h1 className={`${galada.className} text-[40px] tracking-wider font-extrabold md:text-[80px] xl:text-[120px] text-red-800`}>Beneficios</h1>

            <AnimatedTestimonials testimonials={testimonials}
            />
        </div>
    )
}
