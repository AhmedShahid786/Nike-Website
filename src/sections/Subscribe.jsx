import { Button } from "../components";

const Subscribe = () => {
  return (
    <div
      id="subscribeUS"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red dark-text-special"> Updates </span>&
        Newsletter.
      </h3>

      <div className="lg:max-w-[45%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@nike.com" className="input dark-bg" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Sign Up"} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
