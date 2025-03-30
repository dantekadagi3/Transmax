import NewsCard from "@/components/Newscard";
import newspin from '@/assets/images/Logistics.jpeg';

const News = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <div className="text-center md:text-left md:max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">
          Our Latest <span className="text-[var(--orange--color)]">News</span>
        </h1>
        <p className="text-gray-700">
          Transmax is the world's leading global logistics provider—we support industry
          and trade in the worldwide exchange of merchandise through land transport.
        </p>
      </div>

      {/* Container for News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 w-full max-w-7xl">
        <NewsCard
          title="Helping companies in their green transition"
          shortNews="Sustainable development is the creed that underpins Irecco's bespoke..."
          image={newspin}
          date="22 November 2021 "
        />
        <NewsCard
          title="Boosting supply chain efficiency"
          shortNews="Innovative solutions are shaping the future of global trade..."
          image={newspin}
          date="10 October 2021 "
        />
        <NewsCard
          title="Revolutionizing logistics with AI"
          shortNews="AI-driven automation is redefining modern logistics strategies..."
          image={newspin}
          date="15 September 2021 "
        />
        <NewsCard
          title="Sustainable freight solutions"
          shortNews="Eco-friendly freight options are gaining traction worldwide..."
          image={newspin}
          date="5 August 2021 "
        />
      </div>
    </section>
  );
};

export default News;
