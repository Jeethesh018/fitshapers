import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About FTShapers"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            FTShapers is your virtual fitness companion, built to connect
            individuals with experienced gym trainers from around the world. No
            need to commute or schedule around a gym—our platform makes
            professional fitness training available from the comfort of your
            home.
          </p>
          <p>
            Whether you're just starting your fitness journey or you're a
            seasoned athlete, FTShapers allows you to browse and select trainers
            based on their expertise, ratings, and experience. We aim to make
            health and fitness more accessible, flexible, and personalized.
          </p>
          <b className="text-gray-800">OUR VISION</b>
          <p>
            We envision a world where fitness is no longer bound by location or
            schedule. Our mission is to empower people through convenient access
            to top-tier fitness professionals—helping everyone lead healthier,
            stronger lives, one online session at a time.
          </p>
        </div>
      </div>

      <div className="pb-10 text-center">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Save time by accessing certified trainers online. Book sessions at
            your convenience and skip the commute to the gym.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Our platform works around your schedule. Train from home, on
            vacation, or even during a lunch break—your trainer is just a click
            away.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Each training plan is tailored to your goals, body type, and fitness
            level. Get the personal attention you need to stay motivated and on
            track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
