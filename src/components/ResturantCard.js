


const RestaurantCard = ({ resData }) => {
  const { name, cuisine, rating, deliveryTime, image } = resData;

  return (
    <div className="card">
      <img className="cardImage" src={image} alt={name} />

      <div className="cardContent">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>{rating}</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
};


export default RestaurantCard;
