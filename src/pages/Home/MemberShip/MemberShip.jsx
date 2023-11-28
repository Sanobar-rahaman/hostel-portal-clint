import useMember from "../../../Hooks/useMember";
import MemberShipCard from "./MemberShipCard";


const MemberShip = () => {
    const[memberShip] = useMember()
   
    return (
        <div className=" mt-6">
            <h2 className=" text-3xl rounded-full bg-blue-400 text-center text-white mb-6">Enjoy Our Membership</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    memberShip.map(items=><MemberShipCard key={items._id} items={items} ></MemberShipCard>)
                }
            </div>

        </div>
    );
};

export default MemberShip;