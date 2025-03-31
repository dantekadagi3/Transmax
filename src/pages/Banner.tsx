import Button1 from "../components/Button";
import logistics from "../assets/images/Logistics.jpeg";

const Banner = () => {
  function handlePress(): void {
    alert("The button has been pressed");
  }

  return (
    <div
      className="relative h-[20rem] md:h-[28rem] lg:h-[32rem] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url(${logistics})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-60 md:opacity-70"></div>

      {/* Content section */}
      <div className="relative text-center text-white max-w-3xl px-4 md:px-6">
        {/* Brand Name */}
        <h1 className="text-[var(--blue-color)] font-bold text-3xl md:text-4xl">
          Trans<span className="text-[var(--orange--color)]">max</span>
        </h1>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
          World Leading Contract <br className="hidden sm:block" /> Logistics Provider
        </h2>

        {/* Description */}
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
