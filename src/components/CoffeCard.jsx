import PropTypes from "prop-types";

export default function CoffeCard({ data, btnSelected }) {
  const filteredData = data.filter(({ available }) => available);

  return (
    <div
      className="flex justify-start content-start gap-20 flex-wrap mt-10"
      style={{
        width: "75%",
        marginLeft: "85px",
        ...(window.innerWidth >= 1280 &&
          window.innerWidth <= 1843 && {
            width: "100%",
            marginLeft: "30px",
          }),
        ...(window.innerWidth >= 1024 &&
          window.innerWidth <= 1280 && {
            width: "90%",
          }),
        ...(window.innerWidth >= 640 &&
          window.innerWidth <= 1024 && {
            width: "80%",
          }),
        ...(window.innerWidth <= 640 && {
          width: "100%",
          height: "100vh",
          gap: "0",
        }),
      }}
    >
      {(btnSelected === "btn1" ? data : filteredData).map((coffee, index) => (
        <div
          className="flex justify-center"
          style={{
            width: "25%",
            margin: "15.50px",
            ...(window.innerWidth >= 1280 &&
              window.innerWidth <= 1843 && {
                width: "20%",
              }),
            ...(window.innerWidth >= 1024 &&
              window.innerWidth <= 1280 && {
                margin: "20px",
                width: "20%",
              }),
            ...(window.innerWidth >= 640 &&
              window.innerWidth <= 1024 && {
                margin: "40px",
                width: "20%",
              }),
            ...(window.innerWidth <= 640 && {
              marginTop: "5px",
              width: "50%",
            }),
          }}
          key={index}
        >
          <div>
            <div className="w-full relative inline-block">
              <img
                className="w-full block rounded-xl"
                style={{
                  ...(window.innerWidth >= 1280 &&
                    window.innerWidth <= 1843 && {
                      width: "100%",
                    }),
                }}
                src={coffee.image}
                alt={coffee.name}
              />
              <p
                className={`${
                  coffee.popular
                    ? "absolute p-1.5 top-0 left-0 m-2 text-black rounded-xl font-bold bg-yellow-400"
                    : ""
                }`}
                style={{ fontSize: "0.625rem" }}
              >
                {coffee.popular && "popular"}
              </p>
            </div>
            <div
              className="w-full flex flex-row justify-between items-center mt-2.5"
              style={{ width: "260px" }}
            >
              <p className="text-white text-sm">{coffee.name}</p>
              <p className="py-1 px-2.5 rounded-lg text-xs bg-green-400 text-black">
                {coffee.price}
              </p>
            </div>
            <div>
              {coffee.votes !== 0 ? (
                <div
                  className="w-full mt-1 flex flex-row justify-between"
                  style={{ width: "260px" }}
                >
                  <div className="w-full flex flex-row items-center text-center">
                    <img style={{width: "24px"}} src="./public/Star_fill.svg" alt="#" />
                    <p className="text-white ml-1.5 text-xs">{coffee.rating}</p>
                    <p className="ml-1.5 text-xs text-gray-400">
                      ({coffee.votes} votes)
                    </p>
                  </div>
                  <div className="w-full">
                    {!coffee.available && (
                      <p style={{ color: "#ED735D" }}>Sold out</p>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="w-full mt-1 flex flex-row items-center text-center"
                  style={{ width: "260px" }}
                >
                  <img style={{width: "24px"}} src="./public/Star.svg" alt="#" />
                  <p className="ml-1.5 text-xs text-gray-400">No ratings</p>
                </div>
              )}
            </div>
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
