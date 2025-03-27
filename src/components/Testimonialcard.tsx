interface TestimonialCardprop {
    title: string;
    comment: string;
    image: string;
    user: string;
    role: string;
  }
  
  const Testimonialcard: React.FC<TestimonialCardprop> = ({ title, comment, user, role, image }) => {
    return (
<div className="border-b-3 border-[var(--orange--color)]  h-[350px]  w-[300px] shadow-lg p-6 flex flex-col justify-center  items-start">
    {/* The title and comment */}
      <div>
        <h2 className="font-bold text-[var(--blue-color)]">{title}</h2>
        <p className="text-gray-500">{comment}</p>
      </div>

      {/* The user image  and role */}
<div className="flex gap-1.5 justify-center items-center">
       {/**Div containing the image */}
       <div className="rounded-lg justify-center ">
        <img src={image} alt="user" className="w-10 h-10 rounded-full"/>
       </div>
       {/**div containing the text */}
       <div>
        <p className="text-[var(--blue-color)] font-bold">{user}</p>
        <p className="text-[var(--orange--color)] font-bold">{role}</p>
       </div>
 </div>
      

</div>

    );
  };
  
  export default Testimonialcard;
  