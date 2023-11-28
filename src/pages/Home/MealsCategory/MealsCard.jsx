import { Link } from "react-router-dom";


const MealsCard = ({item}) => {
    const { _id,title, image, rating, price } = item
  
    return (
        <div>
            <div className="card w-96 max-h-[400px] bg-base-100 shadow-xl">
                <figure><img className=" max-w-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-center">
                        <Link to={`details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealsCard;