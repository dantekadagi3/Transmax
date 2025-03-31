import Service from "../components/ServiceCard";
import truck from '../assets/icons/truck.svg';

const Services = () => {
  return (
    <section className="bg-[var(--main--background)] flex flex-col items-center justify-center p-8 md:p-12">
      {/* Heading & Description */}
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore our <span className="text-[var(--blue-color)]">services</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quos eius unde ut veritatis, atque non sequi porro eum aspernatur tenetur harum illum soluta quidem facilis? Cum, aliquid labore.
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-[var(--blue-color)] text-white py-2 px-6 uppercase font-bold rounded-md shadow-md hover:bg-opacity-90 transition">
          Explore More
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 w-full max-w-6xl">
        <Service
          icon={truck}
          title="Trucking"
          paragraph="This is some random text describing a very random service for transmax company."
          point1="Point 1"
          point2="Point 2"
          point3="Point 3"
        />
        <Service
          icon={truck}
          title="Logistics"
          paragraph="Another description for a logistics service at Transmax."
          point1="Point A"
          point2="Point B"
          point3="Point C"
        />
        <Service
          icon={truck}
          title="Warehousing"
          paragraph="Warehousing solutions that optimize storage and distribution."
          point1="Point X"
          point2="Point Y"
          point3="Point Z"
        />
      </div>
    </section>
  );
};

export default Services;
