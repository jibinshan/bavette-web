import { Icons } from "@/components/Icon";
import ModelBox from "@/components/ModelBox";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const slideData: {
  ModelUrl: string;
}[] = [
    {
      ModelUrl: "/models/albondigas.glb",
    },
    {
      ModelUrl: "/models/steak-tartare.glb",
    },
    {
      ModelUrl: "/models/king-prawns.glb",
    },
  ];

const AboutUs = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 pb-32 pt-32">
        <h3 className="font-playfair uppercase italic">About Us</h3>
        <h1 className="text-center font-playfair text-4xl sm:text-6xl">
          Step into Bavette.
          <br />
          Where the art of steak becomes an experience.
          <br />
          Your gateway to absolute perfection.
        </h1>
        <Button
          variant="outline"
          className="group mt-8 items-center gap-[1.19rem] border-primary font-semibold uppercase text-white hover:bg-primary md:mt-[5.6rem] lg:z-40 py-7"
        >
          <Link
            href="/table-booking"
            className="flex items-center gap-[1.19rem]"
          >
            Book Table{" "}
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Link>
        </Button>
        <div className="hidden lg:flex lg:w-full lg:justify-center">
          <Carousel className="z-40 h-full w-full">
            <CarouselContent className="w-full">
              {slideData.map((item) => {
                return (
                  <CarouselItem
                    className="flex w-full justify-center"
                    key={item.ModelUrl}
                  >
                    <ModelBox
                      src={item.ModelUrl}
                      width="80%"
                      height="500px"
                      Top="0px"
                      Bottom="10px"
                      cameraOrbit="0deg 50deg 0deg 5m"
                      fieldOfView="35deg"
                      cameraTarget="0m 0m 0m"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex w-full justify-center lg:hidden lg:w-0">
          <Carousel className="z-50 h-full w-full">
            <CarouselContent className="w-full">
              {slideData.map((item) => {
                return (
                  <CarouselItem
                    className="flex w-full justify-center"
                    key={item.ModelUrl}
                  >
                    <ModelBox
                      src={item.ModelUrl}
                      width="100%"
                      height="500px"
                      Top="20px"
                      cameraOrbit="0deg 50deg 0deg 3m"
                      fieldOfView="25deg"
                      cameraTarget="0m 0m 0m"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center gap-4">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden">
        <div className="scrolling-text">
          <h1 className="font-playfair text-[10rem] uppercase text-[#151515]">
            Discover Bavette /
          </h1>
          <h1 className="font-playfair text-[10rem] uppercase text-[#151515]">
            Discover Bavette /
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
