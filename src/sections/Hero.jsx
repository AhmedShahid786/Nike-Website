import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

import { useState } from "react";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        <h1
          id="typed-stringsnpm e"
          className="mt-10 font-palanquin text-8xl max-sm:text[72] max-sm:leading[82] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-lg text-slate-gray text-lg leadig-8 mt-6 max-sm:mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
      </div>

      <div className="sm:ml-16 ml-8 mt-0">
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>

      <div className="relative max-xl:padding-x flex justify-start items-start flex-wrap w-full xl:mt-20 gap-16">
        {statistics.map((stat, ind) => (
          <div key={ind}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="font-montserrat text-slate-gray leading-7">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 sm:py-28 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          className="object-contain relative z-10 max_sm:w-[610px] max_sm:h-[500px] w-[400px] h-[400px]"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
