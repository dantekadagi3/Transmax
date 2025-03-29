import bg from '../assets/images/Logistics.jpeg';
import arrow from '../assets/icons/arrow2.svg';
import Service2card from '@/components/Service2card';

const Service2 = () => {
  return (
    <section
      className="relative flex flex-col justify-end items-center min-h-[30rem] bg-cover bg-center bg-no-repeat p-6 md:p-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Cards container */}
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl pb-8">
        <Service2card
          num="01"
          text="Quality Management System"
          icon={arrow}
          desc="With our worldwide inclusion, strong transportation, organization, and industry-leading logistics experience."
        />
        <Service2card
          num="02"
          text="Reliable Logistics"
          icon={arrow}
          desc="We provide efficient and dependable transport solutions tailored to your needs, ensuring seamless global delivery."
        />
        <Service2card
          num="03"
          text="Customer Support"
          icon={arrow}
          desc="Our dedicated support team ensures 24/7 assistance, helping you track shipments and resolve queries promptly."
        />
        <Service2card
          num="04"
          text="Sustainable Transport"
          icon={arrow}
          desc="We integrate green technologies to minimize our carbon footprint, promoting eco-friendly logistics worldwide."
        />
      </div>
    </section>
  );
};

export default Service2;
