import Button1 from "../components/Button";
import bg from '../assets/images/plane.jpeg';
import Navigation from "../components/Navigation";

export default function Home() {
    const handleClick = () => {
        alert('Button has been clicked');
    };

    return (
        <div>
            <Navigation />
            <section
                className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center px-6 py-12"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/** The black overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                
                <div className="relative flex flex-col gap-4 max-w-2xl mx-auto text-center">
                    <h1 className="text-6xl font-bold text-white">
                        Flexible Logistics <br /> & Cargo for Business
                    </h1>

                    <p className="text-white text-2xl leading-relaxed">
                        We handle everything from clearance to complexity, simplifying 
                        intricate details and transforming data into clear, direct solutions.
                    </p>

                    <Button1 onClick={handleClick} text="Click me" />
                </div>
            </section>
        </div>
    );
}
