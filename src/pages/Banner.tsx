import Button1 from "../components/Button";
import logistics from "../assets/images/Logistics.jpeg";

const Banner = () => {
  function handlePress(): void {
    alert("The button has been pressed");
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[20rem] flex  items-center justify-center py-12"
      style={{ backgroundImage: `url(${logistics})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content section */}
      <div className="relative text-center text-white max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          World Leading Contract <br /> Logistics Provider
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We provide world-class logistics solutions to businesses of all sizes.
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <Button1 text="Learn More" onClick={handlePress} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
