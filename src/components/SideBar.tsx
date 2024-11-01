import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image src="/images/logo.png" width={162} height={35} alt="Foodo" />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start pt-6">
            <Button
              variant="link"
              className={cn("p-0 uppercase text-accent text-white")}
              asChild
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="p-0 uppercase text-accent text-white"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              variant="link"
              className="p-0 uppercase text-accent text-white"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="p-0 uppercase text-accent text-white"
            >
              <Link href="/table-booking">Booking</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="p-0 uppercase text-accent text-white"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
