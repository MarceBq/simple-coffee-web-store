export default function Description() {
  return (
    <div
      className="w-2/4 flex flex-col items-center text-center   
      xl:ml-12"
      style={{
        marginTop: "2rem",
        ...(window.innerWidth >= 1280 && window.innerWidth <= 1843 && {}),
      }}
    >
      <div className=" ">
        <h1 className="text-4xl text-white">Our Collection</h1>

        <p
          className="text-base"
          style={{ marginTop: "1rem", color: "#6F757C" }}
        >
          Introducing our Collection Coffee, a selection of unique coffees from
          differents roast types and origins, expertly roasted in small batches
          and shipped fresh weekly
        </p>
      </div>
    </div>
  );
}
