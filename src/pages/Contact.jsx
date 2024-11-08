import { assets } from "../assets/assets"

const Contact = () =>{
    return(
        <div>
          <div className="text-center text-2xl pt-10 text-gray-500">
            <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
          </div>


          <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
            <img className="w-full md:max-w-[360px]" src={assets.gymConsultant} />
            <div className="flex flex-col justify-center items-start gap-6">
                <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Provident quis id illum perferendis, rerum accusantium? Eveniet incidunt aut vel natus ex molestia</p>
              
                <p  className="text-gray-500">Mob: +91 1234567890 <br/> Email:fitShapers@gmail.com</p>
                <p className="font-semibold text-lg text-gray-600">Carrers at FitShapers</p>
                <p className="text-gray-500">Learn more about out Team</p>
                <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500">Explore More</button>
            </div>
          </div>
        </div>
    )
}

export default Contact