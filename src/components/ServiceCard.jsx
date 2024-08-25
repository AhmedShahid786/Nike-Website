//? Hooks and libraries' imports
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ index, imgURL, label, subtext }) => {
  if (index === 0 || index === 2) {
    index = "fade-right";
  } else if (index === 1) {
    index = "fade-left";
  }
  return (
    <div
      data-aos={index}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-lg px-10 py-16 border-2 border-slate-gray"
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red dark-bg-button rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal dark-text-p">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
