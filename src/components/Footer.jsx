import { assets } from "../assets/assets";

const Footer = () =>{
    return(
         <div className="md:mx-10">
               <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                <div>
                 <img className="mb-5 w-40" src={assets.fitshapers_logo_white} />
                 <p className="w-full md:w-2/3 text-gray-600 leading-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit itaque culpa assumenda. Dignissimos, reprehenderit impedit delectus, numquam sit asperiores rerum temporibus fugit cum pariatur, ea esse voluptatibus hic voluptatum!
                 </p>
                </div>


                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                    </div>
   

                    <div>
                       <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                       <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+91 12345678890</li>
                        <li>fitshapers@gmail.com</li>
                       </ul>
                    </div>
               </div>
               <div>
                <hr />
                <p className="py-5 text-sm text-center">COPYRIGHT 2024@ FitShapers - All Right Reserved</p>
               </div>
         </div>
    )
}

export default Footer;