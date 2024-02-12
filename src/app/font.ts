import { Lexend_Deca, Lexend_Zetta, PT_Serif } from "next/font/google";
//main font
export const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: "400" });
//footer font
export const lexendZetta = Lexend_Zetta({
  subsets: ["latin"],
  weight: "variable",
});
export const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });
