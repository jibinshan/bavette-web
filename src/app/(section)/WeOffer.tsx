import Image from "next/image";

const WeOffer = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-8 md:py-24">
        <h3 className="font-playfair uppercase italic">we offer</h3>
        <h1 className="max-w-[600px] text-center font-playfair text-5xl sm:text-7xl">
          Unforgettable Dining Experience
        </h1>
        <p className="max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
          Bavette was founded on a passion for serving the finest cuts of beef,
          with a steadfast commitment to sustainability and top-notch quality.
          Each dish is a heartfelt creation, expertly crafted by our skilled
          chefs who carefully select every cut to ensure perfection.
        </p>
        <div className="grid-cols- grid w-full pt-4 md:grid-cols-3 md:pt-[8.3rem]">
          <div className="group relative h-auto w-full transition-all duration-300 ease-in-out">
            <Image
              src="/images/home/we-offer/food.png"
              width={640}
              height={756}
              alt="food"
              className="h-full w-full"
            />
            <h1 className="absolute inset-0 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center font-playfair text-[3.2rem] text-[#FBEAD2]">
              Food
            </h1>
            <div
              className="absolute bottom-0 left-0 flex h-[40%] w-full translate-y-[6rem] items-start justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(7, 7, 7, 0.00) 0%, #070707 100%)",
              }}
            >
              <p className="max-w-[300px] text-center">
                Indulge in exquisite dishes that showcase the finest cuts of
                beef, meticulously prepared to delight your palate and elevate
                your dining experience.
              </p>
            </div>
          </div>
          <div className="group relative h-auto w-full transition-all duration-300 ease-in-out">
            <Image
              src="/images/home/we-offer/drinks.png"
              width={640}
              height={756}
              alt="food"
              className="h-full w-full"
            />
            <h1 className="absolute inset-0 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center font-playfair text-[3.2rem] text-[#FBEAD2]">
              Drinks
            </h1>
            <div
              className="absolute bottom-0 left-0 flex h-[40%] w-full translate-y-[6rem] items-start justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(7, 7, 7, 0.00) 0%, #070707 100%)",
              }}
            >
              <p className="max-w-[300px] text-center">
                Savor our carefully curated selection of fine wines and
                artisanal cocktails, perfectly crafted to complement your meal
                and enhance your dining experience.
              </p>
            </div>
          </div>
          <div className="group relative h-auto w-full transition-all duration-300 ease-in-out">
            <Image
              src="/images/home/we-offer/atmosphere.png"
              width={640}
              height={756}
              alt="atmosphere"
              className="h-full w-full"
            />
            <h1 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center font-playfair text-[3.2rem] text-[#FBEAD2]">
              Atmosphere
            </h1>
            <div
              className="absolute bottom-0 left-0 flex h-[40%] w-full translate-y-[6rem] items-start justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(7, 7, 7, 0.00) 0%, #070707 100%)",
              }}
            >
              <p className="max-w-[300px] text-center">
                Immerse yourself in the warm, inviting atmosphere of Bavette,
                where elegant decor and soft lighting create a sophisticated yet
                relaxed setting, perfect for an unforgettable dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
