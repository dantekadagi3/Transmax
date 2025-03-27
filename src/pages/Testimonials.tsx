import Testimonialcard from "@/components/Testimonialcard";
import Button1 from "../components/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: () => (
      <button className="w-4 h-4 rounded-full bg-gray-500"></button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2">
          {Array.isArray(dots) ? dots.slice(0, 3) : dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle button click
  function handleClick(): void {
    console.log("This is a button click");
  }

  const tempTestimonials = [
    {
      title: "Reliable and Efficient",
      comment:
        "TransMax has consistently delivered our goods on time with excellent tracking and customer support.",
      user: "John Doe",
      role: "Supply Chain Manager",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Fast and Secure Shipping",
      comment:
        "Our fragile shipments always arrive in perfect condition. Highly recommend TransMax!",
      user: "Sarah Johnson",
      role: "E-commerce Store Owner",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Excellent Customer Support",
      comment:
        "Whenever we have inquiries, their support team is quick to respond and resolve issues.",
      user: "Michael Lee",
      role: "Operations Director",
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <section className="bg-[var(--main--background)] p-10 flex flex-col lg:flex-row items-center justify-center">
      {/* Left Section */}
      <div className="text-center lg:text-left lg:w-1/3">
        <h2 className="text-black capitalize text-3xl md:text-4xl font-bold">
          What people say <br />
          about our{" "}
          <span className="text-[var(--orange--color)]">company</span>
        </h2>

        <div className="max-w-md mt-4 mx-auto lg:mx-0">
          <p className="text-gray-700 text-sm md:text-base">
            TransMax is the world's leading global logistics provider — we
            support industry and facilitate worldwide trade through efficient
            land transport.
          </p>
        </div>

        <div className="mt-4">
          <Button1 text="ALL TESTIMONIALS" onClick={handleClick} />
        </div>
      </div>

      {/* Right Section: Testimonials */}
      <div className="w-full lg:w-2/3 mt-6 lg:mt-0 px-2">
        <Slider {...settings}>
          {tempTestimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <Testimonialcard
                title={testimonial.title}
                comment={testimonial.comment}
                user={testimonial.user}
                role={testimonial.role}
                image={testimonial.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
