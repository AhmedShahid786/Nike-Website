//? Local imports (icons,images,data to be displayed)
import { closeMenuDark, closeMenuLight, darkToggle, lightToggle, menuDark, menuLight } from "../assets/icons";
import { headerLogoDark, headerLogoLight } from "../assets/images";
import { navLinks } from "../constants";

//? Hooks' imports
import { useState, useEffect } from "react";

//? Main component
const Nav = () => {
  //? State to track dark mode status whether it's turned on by-default or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  //? Check for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  //? Function to toggle/turn on dark mode
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

  //? State to manage the visibility of the menu/navbar for mobile screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //? Function to toggle the menu/navbar visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-20 w-full dark-bg">
      {/* Navbar start */}
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
                className="font-montserrat leading-normal text-lg dark-text-p hover:dark-text hover:text-black"
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

        <div onClick={toggleMenu} className="cursor-pointer">
          <img
            className="hidden max-lg:block"
            src={isDarkMode ? menuDark : menuLight}
            alt="menu-icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
      {/* Navbar end */}

      {/* Full screen navbar menu for mobile screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-md z-30 flex flex-col justify-center items-center fixed inset-0 backdrop-blur-md z-30 flex flex-col justify-center items-center ">
          <button onClick={toggleMenu} className="absolute top-8 right-8">
            <img
              src={isDarkMode ? closeMenuDark : closeMenuLight}
              alt="Close menu"
              width={30}
              height={30}
            />
          </button>

          <ul className="flex flex-col items-center justify-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  data-aos="fade-up"
                  className="font-montserrat leading-normal text-2xl dark-text-p dark-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Full screen navbar menu for mobile screens end*/}

    </header>
  );
};

export default Nav;
