//? Local imports (icons,images,data to be displayed)
import { offer } from "../assets/images";
import { Button } from "../components";

//? Main component
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="SpecialOffer"
          width={773}
          height={687}
          data-aos="fade-up"
          className="object-contain w-full"
        />

        <div data-aos="fade-up" className="flex flex-col flex-1">
          <h2 className="font-palanquin text-4xl capitalize max-sm:text[72] max-sm:leading[82] font-bold lg:max-w-lg">
            <span className="text-coral-red dark-text-special">Special </span>
            Offer
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experiece with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalelled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journe with us
            is nothing short of exceptional.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={1} />
            <Button
              label="Learn More"
              bgColor="bg-white dark-bg"
              borderColor="border-slate-gray"
              textColor="dark-text-p"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
