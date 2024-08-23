const Button = ({label, iconURL, bgColor, borderColor, textColor, fullWidth}) => {
  return (
    <button
      className={`w-max m-0 flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none 
        ${bgColor ? `${bgColor}` : "bg-coral-red"} 
        ${borderColor ? `${borderColor}` : "border-coral-red" }
        ${textColor ? `${textColor}` : "text-white"}
        rounded-full `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt="arrow right icon"
        />
      )}
    </button>
  );
}

export default Button