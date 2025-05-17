import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Company Description */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.fitshapers_logo_white}
            alt="FitShapers Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            FitShapers is a digital fitness platform connecting you with certified gym
            trainers for live, personalized workout sessions—anytime, anywhere.
            Skip the gym and train online with ease, flexibility, and expert guidance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 12345678890</li>
            <li>fitshapers@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2024 FitShapers — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
