import bg from '../assets/images/plane.jpeg';

const Competence = () => {
  return (
    <section className="bg-[var(--blue-color)] p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
      
      {/** Left Text Section */}
      <div className="text-center md:text-left flex-1">
        <h1 className="font-bold text-white text-4xl md:text-5xl leading-snug">
          Our Industry-Explicit <br /> 
          <span className="text-[var(--orange--color)]">Competence</span>
        </h1>

        <div className="mt-6 w-full md:w-[80%]">
          <p className="text-white text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, asperiores. Quibusdam minima sapiente vel, 
            assumenda inventore modi dolor cum laborum unde suscipit error, quas iste maxime tempora fugiat, ut illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, asperiores. Quibusdam minima sapiente vel, 
            assumenda inventore modi dolor cum laborum unde suscipit error, quas iste maxime tempora fugiat, ut illo.
          </p>
        </div>
      </div>

      {/** Right Image Section */}
      <div className="flex-1 flex justify-center">
        <img src={bg} alt="Competence" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

    </section>
  );
};

export default Competence;
