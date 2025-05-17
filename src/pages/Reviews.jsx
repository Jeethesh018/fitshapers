import React, { useState } from 'react';
import useReviewList from '../API/ReviewsAPI/useReviewsList';
import useAddReviews from '../API/ReviewsAPI/useAddReviews';

const Reviews = () => {
  const [reviewList] = useReviewList();
  const [addReview] = useAddReviews();
  const [formData, setFormData] = useState({
    name: '',
    rating: 1,
    feedback: '',
  });

  const [showForm, setShowForm] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim() !== '') {
      await addReview(formData);
    }

    setFormData({ name: '', rating: 1, feedback: '' });
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev < reviewList.length - 1 ? prev + 1 : prev
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">User Reviews</h2>
 {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-8 max-w-md mx-auto"
        >
          <h3 className="text-xl font-bold text-center mb-4">Submit Your Review</h3>

          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Rating:</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r}
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
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          

          <div className="text-right">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}

       {/* Toggle form button */}
      <div className="mt-8 text-center pb-5">
        <button
          onClick={toggleForm}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          {showForm ? 'Cancel' : 'Submit a Review'}
        </button>
      </div>
      {/* Only show one review at a time */}
      {reviewList.length > 0 && (
        <div className="p-4 border rounded bg-gray-100 max-w-xl mx-auto transition-all duration-300">
          <p className="text-lg font-semibold text-blue-700">
            Trainer: {reviewList[currentReviewIndex].name}
          </p>
          <p className="text-yellow-500">
            Rating: {reviewList[currentReviewIndex].rating} / 5
          </p>
          <p className="text-gray-700 mt-2">
            {reviewList[currentReviewIndex].feedback}
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4 max-w-xl mx-auto">
        <button
          onClick={prevReview}
          disabled={currentReviewIndex === 0}
          className={`px-4 py-2 rounded ${
            currentReviewIndex === 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Previous
        </button>

        <button
          onClick={nextReview}
          disabled={currentReviewIndex === reviewList.length - 1}
          className={`px-4 py-2 rounded ${
            currentReviewIndex === reviewList.length - 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>

     

     
    </div>
  );
};

export default Reviews;
