import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 1,
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, formData]);
    setFormData({ name: '', rating: 1, feedback: '' });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Rating:</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">User Reviews</h2>
      <ul className="space-y-4">
        {reviews.map((review, index) => (
          <li key={index} className="p-4 border rounded bg-gray-100">
            <p className="text-lg font-semibold text-blue-700">{review.name}</p>
            <p className="text-yellow-500">Rating: {review.rating} / 5</p>
            <p className="text-gray-700 mt-2">{review.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
