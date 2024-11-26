import { Inter } from "next/font/google";
const primaryFont_init = Inter({
  subsets: ["latin"],
  weight: ["200", "500","700", "800"],
  variable: "--font-inter",
});


export const primaryFont = primaryFont_init.variable;
