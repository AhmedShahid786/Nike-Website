import { starLight, starDark } from "../assets/icons";
import { useState, useEffect } from "react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  // State to track dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-col"
      key={customerName}
    >
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={isDarkMode ? starDark : starLight}
          alt="star"
          width={24}
          height={24}
          className="object-contain max-sm:mt-0 mt-1"
        />
        <p className="text-xl max-sm:mt-0 mt-2 font-montserrat dark-text-p">
          {rating}
        </p>
        <h3 className="mt-1 font-palanquin max-sm:text-3xl text-2xl font-bold text-center">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
