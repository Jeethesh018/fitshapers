import React, { useState } from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecailityMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(""); // Track selected speciality
  const [formData, setFormData] = useState({
    name: "",
    term: "",
    amount: 0,
  });

  // Calculate the amount dynamically based on term
  const calculateAmount = (term) => {
    if (term.includes("month")) return parseInt(term) * 1000; // ₹1000 per month
    if (term.includes("day")) return parseInt(term) * 50; // ₹50 per day
    return 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      amount: name === "term" ? calculateAmount(value) : formData.amount,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Data:", { ...formData, speciality: selectedSpeciality });
    alert("Thank you for enrolling!");
    setIsModalOpen(false); // Close modal after form submission
  };

  const handleSpecialityClick = (speciality) => {
    setSelectedSpeciality(speciality); // Set the selected speciality
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="flex flex-col items-center gap-3 py-16 text-gray-800" id="specaility">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our extensive Trainer
        <br />
        Schedule Your Appointment
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <Link
              onClick={() => handleSpecialityClick(data.speciality)}
              className="flex flex-col items-center"
            //   to={`/trainer/${data.speciality}`}
            >
              <img className="w-16 sm:w-24 mb-2 rounded-full" src={data.image} alt={data.speciality} />
              <p>{data.speciality}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Modal for Enroll Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              Enroll for {selectedSpeciality}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Term</label>
                <select
                  name="term"
                  value={formData.term}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select term</option>
                  <option value="1 month">1 Month</option>
                  <option value="3 months">3 Months</option>
                  <option value="6 months">6 Months</option>
                  <option value="1 day">1 Day</option>
                  <option value="7 days">7 Days</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="text"
                  name="amount"
                  value={`₹${formData.amount}`}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecailityMenu;
