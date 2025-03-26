import bg from '../assets/images/plane.jpeg';

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 justify-center items-center px-6 lg:px-16 py-12">
      {/** About section Text - on the left */}
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          TransMax Logistics <br />
          Around <span className="text-[var(--orange--color)]">the world</span>
        </h1>

        {/** About Text */}
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente fuga, tenetur deleniti earum saepe soluta
          cupiditate est, quaerat dolorem voluptates, eum cumque reiciendis voluptas! Incidunt ex exercitationem soluta
          voluptatum maxime?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente fuga, tenetur deleniti earum saepe soluta
          cupiditate est, quaerat dolorem voluptates, eum cumque reiciendis voluptas! Incidunt ex exercitationem soluta
          voluptatum maxime?
        </p>

        {/** Button */}
        <button className="mt-6 bg-[var(--main--background)] text-[var(--blue-color)] font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300">
          More About Us
        </button>
      </div>

      {/** Right side - Images */}
      <div className="relative w-full max-w-md lg:max-w-lg mb-32 lg:mb-40">
        {/** First Image - Bottom Layer */}
        <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img src={bg} alt="Logistics airplane" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/** Second Image - Top Layer (Overlapping) */}
        <div className="w-3/4 h-[300px] lg:h-[400px] absolute -bottom-20 lg:-bottom-24 right-0 lg:right-10 z-10 shadow-xl">
          <img src={bg} alt="Logistics airplane close-up" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
