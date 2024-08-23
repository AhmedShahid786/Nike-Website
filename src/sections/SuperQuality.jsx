import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="aboutUs"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text[72] max-sm:leading[82] font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red dark-text-special">Super </span>
          <span className="text-coral-red dark-text-special">Quality </span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-9">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
