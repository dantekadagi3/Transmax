import GoalCard from "../components/GoalCard"


const Goals = () => {
  return (
    <section>
          <div className="flex flex-col justify-center items-center">
            <h1>Our Goals in Numbers</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis fuga nihil necessitatibus consequatur architecto eligendi et optio reiciendis quae sequi hic porro quia minima, veniam eius, aspernatur incidunt. Non.</p>
          </div>

          <div className="flex gap-6">
           <GoalCard
           icon=""
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon=""
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon=""
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
            <GoalCard
           icon=""
           num="300+"
           title="Title"
           content="This is the content this is the content this is the actual content"

           />
          </div>
    </section>
      

  )
}

export default Goals
