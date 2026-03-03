import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-primary to-blue-500 rounded-2xl px-6 md:px-10 lg:px-20 shadow-lg overflow-hidden">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[20px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Trainers
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white/90 text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="members" />
          <p>
            Browse through our extensive Trainer
            <br className="hidden sm:block" /> Schedule Your Appointment
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>
      <div className="md:w-1/2 relative flex justify-center items-center md:pl-10 py-8 md:py-0">
        <img
          className="w-64 h-64 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out border-4 border-white/30"
          src={assets.Group_Gymers}
          alt="Group of Gym Trainers"
        />
      </div>
    </div>
  );
};

export default Header;
