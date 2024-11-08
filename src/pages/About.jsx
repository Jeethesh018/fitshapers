import { assets } from "../assets/assets"

const About = () =>{
    return(
        <div>
               <div className="text-center text-2xl pt-10 text-gray-500">
                <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
               </div>

               <div className="my-10 flex flex-col md:flex-row gap-12">
                 <img className="w-full md:max-w-[360px]" src={assets.about_image} />
                 <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem nemo obcaecati aliquid. Excepturi dolorum illum velit, magni totam, laboriosam, delectus repudiandae modi tempora veritatis deserunt incidunt? Corrupti, esse quas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ullam quaerat, ratione mollitia magni assumenda ipsa corrupti provident impedit blanditiis quas obcaecati excepturi earum sint maiores exercitationem nisi dolorum praesentium!</p>
                    <b className="text-gray-800">OUR VISION</b>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dicta quod perferendis quaerat tempore animi molestias. Sint quis architecto assumenda et. Sunt maiores cumque explicabo officia suscipit optio, placeat dolorem!</p>
                 </div>
               </div>

               <div className="pb-10 text-center">
                <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span> </p>
               </div>
               <div className="flex flex-col md:flex-row mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                <b>Efficiency:</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis doloremque quas autem iusto perferendis architecto, assumenda delectus esse!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                <b>Convenience:</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis doloremque quas autem iusto perferendis architecto, assumenda delectus esse!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                <b>Personolization:</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis doloremque quas autem iusto perferendis architecto, assumenda delectus esse!</p>
                </div>
               </div>
        </div>
    )
}

export default About