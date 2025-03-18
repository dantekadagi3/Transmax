import Button1 from "../components/Button"


const Testimonials = () => {
    function handleClick():void{
        console.log("This is a button click")
    }
  return (
   <section className="bg-[var(--main--background)]">
    <div>
        <h2>What people say about our company</h2>

        <div>
    <div>
        <p>
            Transmax is the world's driving worldwide coordinations supplier ---we uphold industry
            and exchange the worlwide trade of merchendise through land transport .
         </p>
    </div>

    <Button1
    text="ALL TESTIMONIALS"
    onClick={handleClick}
    />


        </div>
    </div>
   </section>
  )
}

export default Testimonials
