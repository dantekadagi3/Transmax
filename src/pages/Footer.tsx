import Footercomp from "@/components/Footercomp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900"> 
            <span className="text-orange-500">TRANS</span>MAX
          </h2>
          <p className="mt-2 text-sm">
            <strong>Address:</strong> 27 Division St, New York, NY 10002, USA
          </p>
          <p className="mt-1 text-sm"><strong>Website:</strong> transmax.com</p>
          <p className="mt-1 text-sm"><strong>Email:</strong> transmax@mail.com</p>
          <p className="mt-1 text-sm"><strong>Phone:</strong> +8 (123) 152 25 45</p>
        </div>

        {/* Services */}
        <Footercomp
          title="Our Services"
          content1="Just-in-Time delivery"
          content2="Time-based service levels"
          content3="Warehousing"
          content4="Global stock transparency"
          content5="Transport consolidation"
        />

        {/* Industry Sectors */}
        <div>
          <h2 className="text-lg font-semibold">Industry Sectors</h2>
          <ul className="mt-2 text-sm space-y-1">
            <li>Electronics Industry</li>
            <li>Industrial & Manufacturing</li>
            <li className="text-orange-500">Semicon & Solar</li>
            <li>Oil & Gas Cargo</li>
            <li>Energy & Chemicals</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 text-sm space-y-1">
            <li>How it Works</li>
            <li>Help Link</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} TransMax. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
