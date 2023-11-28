

const AllMealsCard = ({ items }) => {
    const { title, image, meal_description, price, rating } = items
    return (
        <div>
            <div className="card  w-96 mx-h-[400px] bg-base-100 shadow-xl mt-6">
                <figure><img className=" max-h-40"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{meal_description}</p>
                    <p>price: {price}</p>
                    <p>{rating}Star</p>
                </div>
            </div>
        </div>
    );
};

export default AllMealsCard;