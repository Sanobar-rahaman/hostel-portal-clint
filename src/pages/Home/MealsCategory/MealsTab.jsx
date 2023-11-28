import MealsCard from "./MealsCard";


const MealsTab = ({ items }) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                items.map(item=><MealsCard key={item._id} item={item} ></MealsCard>)
            }
        </div>
    );
};

export default MealsTab;