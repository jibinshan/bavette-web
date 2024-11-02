import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Booking = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-[#131313] md:flex-row">
        <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
          <Image
            src="/images/home/private-dining/private-dining.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-auto w-full rounded-lg md:rounded-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
          <h3 className="font-playfair uppercase italic">Booking</h3>
          <h1 className="max-w-[500px] text-center font-playfair text-6xl sm:text-7xl md:text-start">
            Private & Group Dining
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
            At Bavette, we offer exceptional private and group dining
            experiences tailored to your needs, whether it&apos;s an intimate
            celebration or a lively gathering with friends. Enjoy our exquisite
            menu in a dedicated space, where attentive service and a warm
            atmosphere ensure a memorable occasion for all.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent font-semibold uppercase text-white hover:bg-primary py-7"
          >
            <Link
              href="/table-booking"
              className="flex items-center gap-[1.19rem]"
            >
              Book Table{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
