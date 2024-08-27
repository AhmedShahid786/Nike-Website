//? Libraries and hooks imports
import { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  once: false,
});

//? Local imports
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding sm:!pt-0 max-sm:!pt-[6rem]">
        <PopularProducts />
      </section>
      <section className="padding sm:!pt-0 max-sm:!pt-[6rem]">
        <SuperQuality />
      </section>
      <section className="padding-x py-10  sm:!pt-0 max-sm:!pt-[6rem]">
        <Services />
      </section>
      <section className="padding  sm:!pt-0 max-sm:!pt-[6rem]">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue dark-bg padding sm:!pt-0 max-sm:!pt-[6rem]">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full sm:!pt-16 max-sm:!pt-[6rem]">
        <Subscribe />
      </section>
      <section  className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
