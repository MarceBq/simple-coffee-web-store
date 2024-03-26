import PropTypes from "prop-types";

export default function CoffeCard({ data, btnSelected }) {
  const filteredData = data.filter(({ available }) => available);

  return (
    <div>
      {(btnSelected === "btn1" ? data : filteredData).map((coffee, index) => (
        <div className="" key={index}>
          <div>
            <img src={coffee.image} alt={coffee.name} />
            <p className="text-4xl">{coffee.popular && "popular"}</p>
          </div>
          <div>
            <p>{coffee.name}</p>
            <p>{coffee.price}</p>
          </div>
          <div>
            {coffee.votes !== 0 ? (
              <div>
                <img src="./src/assets/Star_fill.svg" alt="" />
                <p>{coffee.rating}</p>
                <p>({coffee.votes} votes)</p>
                {!coffee.available && <p>Sold out</p>}
              </div>
            ) : (
              <div>
                <img src="./src/assets/Star.svg" alt="" />
                <p>No ratings</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

CoffeCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      popular: PropTypes.bool,
      rating: PropTypes.number,
      votes: PropTypes.number,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
  btnSelected: PropTypes.string.isRequired,
};
