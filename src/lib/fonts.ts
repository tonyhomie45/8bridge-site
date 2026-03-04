import localFont from "next/font/local";

export const nexa = localFont({
  src: [
    { path: "../../public/fonts/Nexa-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Nexa-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nexa-Book.otf", weight: "450", style: "normal" },
    { path: "../../public/fonts/Nexa-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Nexa-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Nexa-Light-Italic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Nexa-Book-Italic.otf", weight: "450", style: "italic" },
    { path: "../../public/fonts/Nexa-Bold-Italic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Nexa-Black-Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-nexa",
  display: "swap",
});

export const kurdis = localFont({
  src: [
    {
      path: "../../public/fonts/KurdisVariableFamilyTest-ExtraWide-BF64bf41e10ac46.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/KurdisVariableFamilyTest-ExtraWideSemiBold-BF64bf41e0e4ce5.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/KurdisVariableFamilyTest-ExtraWideBold-BF64bf41e1032f4.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/KurdisVariableFamilyTest-ExtraWideExtraBold-BF64bf41e13a4b4.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/KurdisVariableFamilyTest-ExtraWideBlack-BF64bf41e0bdc0c.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kurdis",
  display: "swap",
});
