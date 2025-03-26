import GoalCard from "../components/GoalCard";
import truck from '../assets/icons/truck.svg';
import map from '../assets/images/map.jpg';

const Goals = () => {
  return (
    <section 
      className="flex flex-col justify-center items-center px-6 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${map})` }}
    >
      {/** Title Section */}
      <div className="text-center max-w-3xl">
        <h1 className="font-bold text-3xl md:text-4xl">
          Our Goals in <span className="text-[var(--orange--color)]">Numbers</span>
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis fuga nihil necessitatibus 
          consequatur architecto eligendi et optio reiciendis quae sequi hic porro quia minima, veniam eius, aspernatur incidunt. Non.
        </p>
      </div>

      {/** Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-9 w-full max-w-5xl">
        <GoalCard
          icon={truck}
          num="300+"
          title="Warehouses Managed"
          content="We help you mitigate supply chains distributions"
        />
        <GoalCard
          icon={truck}
          num="120+"
          title="Supply Engineers"
          content="We help you mitigate supply chains distributions"
        />
        <GoalCard
          icon={truck}
          num="60+"
          title="Countries Covered"
          content="We help you mitigate supply chains distributions"
        />
        <GoalCard
          icon={truck}
          num="600+"
          title="Companies We Help"
          content="We help you mitigate supply chains distributions"
        />
      </div>
    </section>
  );
};

export default Goals;
