"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
    {
      name: "Albondigas",
      price: "30",
      modelUrl: "/models/albondigas.glb",
    },
    {
      name: "Bavette Special Burger",
      price: "40",
      modelUrl: "/models/bavette-special-burger.glb",
    },
    {
      name: "Crispy Steak (asado)",
      price: "50",
      modelUrl: "/models/crispy-steak-(asado).glb",
    },
    {
      name: "King Prawns",
      price: "60",
      modelUrl: "/models/king-prawns.glb",
    },
    {
      name: "Padron Peppers",
      price: "80",
      modelUrl: "/models/padron-peppers.glb",
    },
    {
      name: "Potato And Leek Gratin",
      price: "100",
      modelUrl: "/models/potato-and-leek-gratin.glb",
    },
    {
      name: "Steak Tartare",
      price: "100",
      modelUrl: "/models/steak-tartare.glb",
    },
  ];

const Special = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="font-playfair uppercase italic">Special</h3>
        <h1 className="max-w-[600px] text-center font-playfair text-5xl sm:text-7xl">
          Bavette Signature Steaks
        </h1>
        <p className="max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
          Bavette was born from a passion for bringing the finest cuts of beef
          to the table, with a commitment to sustainability.
        </p>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
