import { useState } from "react";

interface Service2props {
  num: string;
  text: string;
  icon: string;
  desc: string;
}

const Service2card: React.FC<Service2props> = ({ num, text, icon, desc }) => {
  const [show, setShow] = useState(false);

  function onClick1(): void {
    setShow((prev) => !prev);
  }

  return (
    <div
      className={`flex flex-col bg-white/10 backdrop-blur-lg p-6 rounded-lg transition-all duration-300 
        w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[25rem] 
        ${show ? "min-h-[23rem]" : "min-h-[18rem]"}`}
    >
      <h2 className="font-bold text-[var(--orange--color)] text-2xl md:text-3xl">{num}</h2>
      <p className="text-white text-lg md:text-xl font-bold">{text}</p>

      {/* Description div with toggle visibility */}
      <div
        className={`transition-all duration-300 overflow-hidden 
          ${show ? "max-h-[10rem]" : "max-h-0"}`}
      >
        <p className="text-white text-sm md:text-base mt-2">{desc}</p>
      </div>

      {/* Clickable icon div */}
      <div
        className="h-10 w-10 flex justify-center items-center bg-white/10 backdrop-blur-lg rounded-full 
        hover:bg-[var(--orange--color)] cursor-pointer self-end mt-auto"
        onClick={onClick1}
      >
        <img src={icon} alt="icon" className="h-5 w-5 object-contain" />
      </div>
    </div>
  );
};

export default Service2card;
