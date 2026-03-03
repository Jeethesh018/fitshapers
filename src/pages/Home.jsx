import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecailityMenu from "../components/SpecailityMenu";
import TopTrainer from "../components/TopTrainers";

const Home = () =>{
    return(
        <div>
       <Header/>
       <SpecailityMenu/>
       <TopTrainer/>
       <Banner/>
       
        </div>
    )
}

export default Home;