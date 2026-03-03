import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecailityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-gray-800" id="speciality">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Browse through our extensive Trainer
        <br /> Schedule Your Appointment
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto pb-2">
        {specialityData.map((data, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:-translate-y-2 transition-all duration-300"
            key={index}
            to={`/trainer/${data.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2 rounded-full shadow-md" src={data.image} alt={data.speciality} />
            <p>{data.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecailityMenu;
