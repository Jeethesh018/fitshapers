import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import useAddTrainer from '../API/trainerApi/useAddTrainer';
import useEditTrainer from '../API/trainerApi/useEditTrainer';
import useDeleteTrainer from '../API/trainerApi/useDeleteTrainer';
import useTrainerlist from '../API/trainerApi/useTrainerlist';
import { appContext } from '../Context/AppContex';
import AddDetails from './AddDetails';
import useUserlist from '../API/UserAPI/useUserlist';
import useDeleteUser from '../API/UserAPI/useDeleteUser';

const Admin = () => {

   const {setName,
    name,
    experience,
    setExperience,
    skills,
    setSkills,
    photo,setPhoto,
    isEditing,
    setIsEditing,
    currentTrainerId,setCurrentTrainerId} = useContext(appContext)
  const [addTrainer] = useAddTrainer();
  const [editTrainer] = useEditTrainer();
  const [deleteTrainer] = useDeleteTrainer();
  const [trainerlist] = useTrainerlist();
  const [userlist] = useUserlist();
  const [deleteUser] = useDeleteUser();
  const handleCheckboxChange = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((item) => item !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  }; 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result); 
    };

    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const submit = (e) => {
    e.preventDefault();

    let obj = {
      name: name,
      experience: experience,
      skills: skills,
      photo: photo, 
    };

    if (isEditing) {
     
      editTrainer( obj,currentTrainerId);
      toast.success('Trainer updated successfully');
    } else {

      addTrainer(obj);
      toast.success('Trainer added successfully');
    }

  
    setName('');
    setExperience('');
    setSkills([]);
    setPhoto('');
    setIsEditing(false);
    setCurrentTrainerId(null);
  };

  const handleEdit = (trainer) => {
    setName(trainer.name);
    setExperience(trainer.experience);
    setSkills(trainer.skills);
    setPhoto(trainer.photo);
    setCurrentTrainerId(trainer.id);
    setIsEditing(true);
  };

  return (
<>
<AddDetails submit={submit} Header="Add Trainer" Header2="Trainer list" handleFileChange={handleFileChange} handleCheckboxChange={handleCheckboxChange} handleEdit={handleEdit}/>
 

        
</>
     );
};

export default Admin;
