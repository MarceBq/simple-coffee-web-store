import Description from "./components/Description";
import CoffeCard from "./components/CoffeCard";
import Button from "./components/shared/Button";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]); 
  const [btnSelected, setBtnSelected] = useState("btn1");
  

  const getApi = async () => {
    const resp = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );

    // The data variable is an array of objects
    const dataApi = await resp.json();

    setData(dataApi);
    setFilterData(dataApi)
  };

  // FilterData


  useEffect(() => {
    getApi();
    console.log(getApi());
  }, []);

  const handleClick = (btnId) => {
    setBtnSelected(btnId);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <img className="w-full" src="./src/assets/bg-cafe.jpg" alt="#" />
      <div
        className="w-4/5 flex flex-col items-center"
        style={{ backgroundColor: "#1B1D1F" }}
      >
        <Description />
        <div
          className="w-2/4 flex justify-around"
          style={{ marginTop: "1rem" }}
        >
          <Button
            btnSelected={btnSelected === "btn1"}
            setBtnSelected={setBtnSelected}
            id="btn1"
            handleClick={handleClick}
            text="All Products"
          />
          <Button
            btnSelected={btnSelected === "btn2"}
            setBtnSelected={setBtnSelected}
            id="btn2"
            handleClick={handleClick}
            text="Available Now"
          />
        </div>
        <CoffeCard data={data} setData={setData} btnSelected={btnSelected} />
      </div>
    </div>
  );
}

export default App;
