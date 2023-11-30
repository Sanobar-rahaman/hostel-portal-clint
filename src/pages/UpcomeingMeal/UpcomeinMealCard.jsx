


const UpcomeinMealCard = ({ items }) => {
    
    const { meal_title, category, meal_image, ingredients, description, price, rating, post_time, distributor_name, distributor_email } = items

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" max-w-md max-h-40" src={meal_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{meal_title}</h2>
                    <p> Ingredints {ingredients}</p>
                    <p>Category {category}</p>
                    <p>price ${price}</p>
                    <p>{description}</p>
                    <p> posted by:{distributor_name}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default UpcomeinMealCard;