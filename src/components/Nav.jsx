import { darkToggle, hamburger, lightToggle } from "../assets/icons";
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
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

  // Function to toggle dark mode
  const handleToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full dark-bg">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={isDarkMode ? headerLogoDark : headerLogoLight}
            alt="Logo"
            width={130}
            height={29}
            className="dark-text-special"
          />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg dark-text-p dark-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/"
          onClick={handleToggle}
          className="rounded-full border-2 border-slate-gray p-2 sm:mt-[-8px] mt-[-4px] dark:border-dark-c1"
        >
          <img
            id="darkToggle"
            src={isDarkMode ? lightToggle : darkToggle}
            alt="Logo"
            className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
          />
        </a>

        <div>
          <img
            className="hidden max-lg:block"
            src={hamburger}
            alt={hamburger}
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
