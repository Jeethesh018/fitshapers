import { useContext } from "react";
import { appContext } from "../Context/AppContex";
import useDeleteTrainer from '../API/trainerApi/useDeleteTrainer';
import useTrainerlist from '../API/trainerApi/useTrainerlist';

const AddDetails = ({submit,handleCheckboxChange,handleEdit,handleFileChange,Header,Header2}) =>{

  const {setName,
    name,
    experience,
    setExperience,
    skills,
    isEditing,} = useContext(appContext)

  const [deleteTrainer] = useDeleteTrainer();
  const [trainerlist] = useTrainerlist();

    return(
        <div className="flex space-x-8 p-4">
  
        <form className="bg-white p-8 rounded shadow-md w-1/2" onSubmit={submit}>
          <h2 className="text-2xl font-bold mb-6">{Header}</h2>
          
          
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter the name"
            />
          </div>
  
         
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Experience</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter experience"
            />
          </div>
  
       
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Skills</label>
            <div className="flex flex-col space-y-2">
              {['Yoga', 'Calisthenics', 'Home Workout', 'Gymnastics'].map((skill) => (
                <label key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={skills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                    className="mr-2"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>
  
         
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Upload Photo</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
  
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {isEditing ? 'Update Trainer' : 'Submit'}
          </button>
        </form>
  
      
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <h2 className="text-2xl font-bold mb-6">{Header2}</h2>
          <div className="space-y-4">
            {trainerlist.map((trainer, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b">
                <p>{trainer.name}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(trainer)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTrainer(trainer.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default AddDetails;