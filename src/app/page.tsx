import AboutUs from "@/app/(section)/AboutUs";
import ExploreMenu from "@/app/(section)/ExploreMenu";
import Hero from "@/app/(section)/Hero";
import Booking from "@/app/(section)/Booking";
import WeOffer from "@/app/(section)/WeOffer";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Gallery from "@/app/(section)/Gallery";
import Reviews from "@/app/(section)/Reviews";
import Special from "@/app/(section)/(special)/Special";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero />
        <ExploreMenu />
        <WeOffer />
        <Special />
        <Booking />
        <Reviews />
        <Gallery />
        <AboutUs />
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
