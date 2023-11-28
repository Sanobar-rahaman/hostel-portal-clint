import { Link } from "react-router-dom";


const MemberShipCard = ({items}) => {
    const{title,image,price} = items
    
    return (
        <div>
            <div className="card  w-96 mx-h-[400px] bg-base-100 shadow-xl mt-6">
                <figure><img className=" max-h-40"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className=" text-xl">price: ${price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/payment/${title}`} ><button className=" btn btn-block">Purchase</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MemberShipCard;