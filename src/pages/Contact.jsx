import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.gymConsultant}
          alt="Gym Consultant"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            We are headquartered in Bengaluru, India, and operate fully remotely to
            empower fitness seekers across the country. Whether you're a trainer or a
            trainee, our support team is just a call or message away.
          </p>

          <p className="text-gray-500">
            <strong>Mob:</strong> +91 1234567890 <br />
            <strong>Email:</strong> fitshapers@gmail.com
          </p>

          <p className="font-semibold text-lg text-gray-600">
            Careers at FitShapers
          </p>
          <p className="text-gray-500">
            We're always looking for passionate fitness professionals and tech talent.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
