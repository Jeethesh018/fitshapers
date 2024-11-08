import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SpecailityMenu from "../components/SpecailityMenu";
import TopTrainer from "../components/TopTrainers";

const Home = () =>{
    return(
        <div>
       <Header/>
       <SpecailityMenu/>
       {/* <TopTrainer/> */}
       <Banner/>
       
        </div>
    )
}

export default Home;