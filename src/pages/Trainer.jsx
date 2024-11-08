import useTrainerlist from "../API/TrainerAPI/useTrainerlist";




const Trainer = () =>{

  const [trainerlist] = useTrainerlist();
    console.log(trainerlist)
    return(
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Top Trainers to Book</h1>
        <p className="sm:w-1/3 text-center text-sm"> Browse through our extensive Trainer
      <br/> Schedule Your Appointment</p>
      <div className="w-full  grid grid-cols-auto ga-10 pt-5 gap-y-6 px-3 sm:px-0">
          {trainerlist?.slice(0,10).map((trainer,index) =>
               <div className="border ml-3 border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
                  <img className="bg-blue-50" src={trainer.photo} />
                  <div className="p-4 ">
                      <div className="flex items-center gap-2 text-sm text-center text-green-500">
                          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                          <p>Available</p>
                          </div>
                          <p className="text-gray-900 text-lg font-medium">{trainer.name}</p>
                          <p className="text-gray-600 text-sm">Experience:{trainer.experience}</p>
                          <p className="text-gray-600 text-sm">Skills : {trainer.skills.join(",")}</p>
                      </div>
          </div>
          )}
      </div>
      <button onClick={()=>{navigate("/trainer"); scrollTo(0,0);}} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">more</button>
  </div>
    )
}

export default Trainer