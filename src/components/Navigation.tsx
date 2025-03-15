
function Navigation(){
 return (
    <header>
        <div className="flex ">
            <div>
             <h1 className="text- font-bold text-2xl uppercase  text-">Trans<span className="text-[var(--orange--color)]">Max</span></h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <button>Connect with us</button>
                    </ul>
                </nav>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
 )
}export default  Navigation