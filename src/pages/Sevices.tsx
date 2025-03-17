import Service from "../components/ServiceCard";
import truck from '../assets/icons/truck.svg';

const Sevices = () => {
  return (
    <section className="bg-[var(--main--background)]">
        <div className='flex gap-2'>
    <div>
         <h1>Explore our <span>services</span></h1>
     <div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quos eius unde ut veritatis, atque non sequi porro eum aspernatur tenetur harum illum soluta quidem facilis? Cum, aliquid labore.</p>
         </div>
      </div>

      <div>
            <button className='bg-[var(--orange--color)] text-white py-2 px-4'></button>
    </div>
     </div>
   {/**card container */}
     <div>
    <Service
    icon={truck}
    title="Trucking"
    paragraph="This is some random text describing a very random service for transmax company"
    point1="pont1"
    point2="point2"
    point3="point3"
    />

<Service
    icon={truck}
    title="Trucking"
    paragraph="This is some random text describing a very random service for transmax company"
    point1="pont1"
    point2="point2"
    point3="point3"
    />

<Service
    icon={truck}
    title="Trucking"
    paragraph="This is some random text describing a very random service for transmax company"
    point1="pont1"
    point2="point2"
    point3="point3"
    />
     </div>
    </section>
  )
}

export default Sevices;
