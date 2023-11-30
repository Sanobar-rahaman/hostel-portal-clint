import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MealsCategory from "./MealsCategory/MealsCategory";
import MemberShip from "./MemberShip/MemberShip";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MealsCategory></MealsCategory>
           <MemberShip></MemberShip>
           <Footer></Footer>
        </div>
    );
};

export default Home;