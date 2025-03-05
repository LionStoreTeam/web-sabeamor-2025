"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { galada } from "../../../fonts/fonts";
export function CardStackDemo() {
    return (
        <div className="my-20 flex flex-col items-center justify-center w-full">
            <h1 className={`${galada.className} pb-20 px-4 text-[40px] tracking-wider font-extrabold md:text-[80px] xl:text-[120px] text-red-800`}>Motivación y Salud</h1>
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-amber-100 text-white-700 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "#SabeaMOR",
        designation: "#FlorDeJamaica  #VidaSaludable",
        content: (
            <p>
                ¡No dejes pasar la oportunidad de incorporar la flor de jamaica en tu vida! Natural, saludable y deliciosa, ¡haz tu pedido hoy! 💐
            </p>
        ),
    },
    {
        id: 1,
        name: "#SabeaMOR",
        designation: "#BienestarNatural",
        content: (
            <p>
                ¿Buscas un toque especial para tus bebidas y recetas? La flor de jamaica de Sabe aMOR es todo lo que necesitas. ¡Haz clic y compra ahora! 🍷
            </p>
        ),
    },
    {
        id: 2,
        name: "#SabeaMOR",
        designation: "#VidaSaludable",
        content: (
            <p>
                Transforma tu rutina diaria con los increíbles beneficios de la flor de jamaica. ¡Haz tu pedido y comienza a sentir la diferencia! 🕺
            </p>
        ),
    },
    {
        id: 3,
        name: "#SabeaMOR",
        designation: "#FlorDeJamaica  #BienestarNatural",
        content: (
            <p>
                Desde el campo a tu mesa: disfruta de la flor de jamaica más fresca y de calidad. ¡Compra ya y siente el sabor natural! 🌺
            </p>
        ),
    },
    {
        id: 4,
        name: "#SabeaMOR",
        designation: "#VidaSaludable",
        content: (
            <p>
                Cada sorbo cuenta, cada beneficio se suma. ¡Consigue tu flor de jamaica hoy y empieza a cuidar tu salud mientras disfrutas de su sabor! ✨
            </p>
        ),
    },
    {
        id: 5,
        name: "#SabeaMOR",
        designation: "#BienestarNatural",
        content: (
            <p>
                Sabe aMOR te ofrece lo mejor de la flor de jamaica, cultivada con amor y entregada directamente a tu hogar. ¡Compra ahora y comprueba por qué nos eligen! 💖
            </p>
        ),
    },
];
