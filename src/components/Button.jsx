import { arrowRightDark, arrowRightLight } from "../assets/icons";
import { useState, useEffect } from "react";

const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
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
    <button
      className={`w-max m-0 flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none
        ${bgColor ? `${bgColor}` : "bg-coral-red dark-bg-button"} 
        ${borderColor ? `${borderColor}` : "border-coral-red dark-border"}
        ${textColor ? `${textColor}` : "text-white"}
        rounded-full `}
    >
      {label}
      {iconURL && (
        <img
          src={isDarkMode ? arrowRightDark : arrowRightLight}
          className="ml-2 rounded-full w-5 h-5"
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
