import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
  return (
    <footer className="z-50 flex h-full w-full items-center justify-center bg-[#131313] px-2 py-[8.75rem]">
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-10 lg:flex-row">
        <div className="flex w-full flex-col px-4 lg:w-1/2">
          <h1 className="max-w-[500px] font-playfair text-7xl">
            Subscribe to our newsletter
          </h1>
          <div className="flex w-full flex-row justify-between pt-[7.81rem]">
            <div className="flex flex-col">
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-accent"
              >
                Menu
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-accent"
              >
                About
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-accent"
              >
                Contact
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-accent"
              >
                Booking
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-accent"
              >
                Gift Voucher
              </Button>
            </div>
            <div className="flex flex-col gap-[1.38rem]">
              <h3 className="font-bold uppercase">Contact</h3>
              <p>0151 245 1500</p>
              <p>Info@bavetteliverpool.co.uk</p>
              <p>$9 Allerton Rd, Liverpool L25 7RE</p>
            </div>
          </div>
          <div className="flex w-full justify-end pt-[1.22rem]">
            <Button
              variant="ghost"
              asChild
              className="px-1 py-1 hover:bg-transparent"
            >
              <Link href="https://www.instagram.com/bavettesteakhouse/">
                <span className="sr-only">Instagram</span>
                <Icons.instagram />
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="px-1 py-1 hover:bg-transparent"
            >
              <Link href="https://www.tripadvisor.com/Restaurant_Review-g186337-d23660134-Reviews-or30-Bavette_Steak_House_Liverpool-Liverpool_Merseyside_England.html">
                <span className="sr-only">Trip Advisor</span>
                <Icons.tripAdvisor />
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="px-1 py-1 hover:bg-transparent"
            >
              <Link href="https://g.co/kgs/3rHehs1">
                <span className="sr-only">Google</span>
                <Icons.google />
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="px-1 py-1 hover:bg-transparent"
            >
              <Link href="https://www.facebook.com/bavettesteakhouse/">
                <span className="sr-only">Facebook</span>
                <Icons.facebook />
              </Link>
            </Button>
          </div>
        </div>
        <div className="h-full w-full px-4 lg:w-1/2">
          <div className="flex w-full flex-col justify-between gap-10 lg:h-[500px]">
            <div className="flex h-full flex-col gap-10">
              <p className="max-w-[380px]">
                By subscribing to the newsletter, you will always be up to date.
                Find out about new products, events, and specials.
              </p>
              <div className="flex flex-col gap-2 lg:flex-row">
                <input
                  placeholder="Email"
                  className="min-w-[300px] border-b border-primary bg-transparent text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                />
                <Button
                  className="group items-center gap-[1.19rem] border border-accent bg-transparent font-semibold uppercase text-accent hover:border-primary hover:bg-primary hover:text-[#282828]"
                  variant="secondary"
                >
                  Subscribe
                  <Icons.rightArrow className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-end">
              <Image
                src="/images/logo-all-gold.png"
                width={205}
                height={68}
                alt="logo"
              />
              <p className="text-[#64615C]">© 2024 bavetteliverpool <Link href="https://foodo.ai">Powered By Foodo</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
