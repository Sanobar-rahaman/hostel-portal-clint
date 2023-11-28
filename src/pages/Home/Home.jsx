import Banner from "./Banner/Banner";
import MealsCategory from "./MealsCategory/MealsCategory";
import MemberShip from "./MemberShip/MemberShip";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MealsCategory></MealsCategory>
           <MemberShip></MemberShip>
        </div>
    );
};

export default Home;