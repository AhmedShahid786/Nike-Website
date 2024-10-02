//? Local imports (icons,images,data to be displayed)
import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

//? Hooks' and libraries' imports
import { useState, useEffect } from "react";
import Typed from "typed.js";

//? Main component
const Hero = () => {
  //? State to manage main image of hero scetion
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  //? Typed JS Library
  useEffect(() => {
    let options = {
      typeSpeed: 70,
      showCursor: false,
    };

    let option1 = {
      strings: ["The New Arrival"],
      ...options,
    };
    let option2 = {
      strings: ["Nike&nbsp;"],
      ...options,
    };
    let option3 = {
      strings: ["Shoes"],
      ...options,
    };

    let backSpaceOptions = {
      strings: [""],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      backDelay: 1000,
      startDelay: 100,
      loop: false,
    };

    function typing() {
      const typed1 = new Typed(".typedText1", {
        ...option1,
        onComplete: () => {
          const typed2 = new Typed(".typedText2", {
            ...option2,
            onComplete: () => {
              const typed3 = new Typed(".typedText3", {
                ...option3,
                onComplete: () => {
                  //? Backspacing after typed3 completion
                  const typedBackSpace3 = new Typed(".typedText3", {
                    ...backSpaceOptions,
                    onComplete: () => {
                      const typedBackSpace2 = new Typed(".typedText2", {
                        ...backSpaceOptions,
                        onComplete: () => {
                          const typedBackSpace1 = new Typed(".typedText1", {
                            ...backSpaceOptions,
                            onComplete: () => {
                              typing();
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    }
    typing();
  }, []);
  //? Typed JS library end

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 min-h-screen flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red dark-text-special z-20">
          Our Summer Collections
        </p>

        {/* //? Div to display typed js text start */}
        <div className="bg-transparent lg:h-[50dvh] h-[80dvh] w-full">
          <h1 className="bg-transparent mt-0 font-palanquin text-8xl max-sm:text-[72px] font-bold">
            <span className="typedText1 bg-transparent xl:whitespace-nowrap relative z-10 pr-10"></span>
            <br className="sm:hidden" />
            <span className="typedText2 bg-transparent text-coral-red inline-block mt-3 dark-text-special"></span>
            <br className="sm:hidden" />
            <span className="typedText3 bg-transparent  whitespace-pre xl:whitespace-nowrap relative z-10 pr-10"></span>
          </h1>
        </div>
        {/* //? Typed js div end */}

        <p className="animate__animated animate__fadeIn animate__slower font-montserrat text-lg dark-text-p text-lg leadig-8 mt-6 max-sm:mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
      </div>

      <div className="sm:ml-16 xl:ml-0 ml-8 mt-0">
        <Button label="Shop Now" iconURL={1} />
      </div>

      {/* Statistics start */}
      <div
        data-aos="fade-up"
        className="relative max-xl:padding-x flex justify-start items-start flex-wrap w-full xl:mt-20 gap-16"
      >
        {statistics.map((stat, ind) => (
          <div key={ind}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="font-montserrat dark-text-p leading-7">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      {/* Statistics end */}

      {/* Hero section images display start */}
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 sm:py-28 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          className="object-contain relative z-10 max_sm:w-[610px] max_sm:h-[500px] w-[400px] h-[400px]"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div
              data-aos="fade-left"
              data-aos-delay={index * 50}
              ata-aos-easing="ease-out"
              key={index}
            >
              <ShoeCard
                index={index}
                imgURL={image}
                setBigShoeImage={(shoes) => setBigShoeImg(shoes)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Hero section images display end */}
    </section>
  );
};

export default Hero;
