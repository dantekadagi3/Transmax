
import Button1 from "./Button"


function Navigation(){
    function Contactus():void{
        window.location.href = "https://www.google.com"
    }
    
 return (
    <header className="fixed top-0 left-0 z-50 w-full">
        {/**div containing the content of the first navigation */}
       <div className="flex justify-between items-center px-[10px] py-[10px] bg-white">
           {/**The logo area */}
           <div className="">
            <h1 className="text-[var(--blue-color)] font-bold text-4xl">Trans<span className="text-[var(--orange--color)]">max</span></h1>
           </div>

           <nav className="flex gap-[40px]">
            {/**The navigation links */}
            <ul className="flex  items-center  gap-[40px] font-bold">
                <li>Services</li>
                <li>News & Media</li>
                <li>Careers</li>
            </ul>
            <Button1
            text="CONNECT WITH US"
            onClick={Contactus}
            />
           </nav>
       </div>
        {/**div containing the content of the second navigation */}
        <nav className="flex justify-center items-center bg-white/10 backdrop-blur-lg py-[20px] ">
            <ul className="flex gap-[40px] font-bold text-white">
                <li>Home</li>
                <li>Pages</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contacts</li>
                
            </ul>
        </nav>
    </header>
 )
}export default  Navigation