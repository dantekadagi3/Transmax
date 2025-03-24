import GoalCard from "../components/GoalCard"
import truck from '../assets/icons/truck.svg';


const Goals = () => {
  return (
    <section>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl">Our Goals in <span className="text-[var(--orange--color)]">Numbers</span></h1>
            <p className="text-">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis fuga nihil necessitatibus consequatur architecto eligendi et optio reiciendis quae sequi hic porro quia minima, veniam eius, aspernatur incidunt. Non.</p>
          </div>

          <div className="flex gap-6 mt-9">
           <GoalCard
          icon={truck}
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon={truck}
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon={truck}
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon={truck}
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
          </div>
    </section>
      

  )
}

export default Goals
