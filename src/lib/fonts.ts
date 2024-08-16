// lib/fonts.ts
import { Lora, Bodoni_Moda as BodoniModa } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

const bodoniModa = BodoniModa({
    subsets: ["latin"],
    variable: "--font-bodoniModa",
});

export const fonts = {
    lora,
    bodoniModa,
};
