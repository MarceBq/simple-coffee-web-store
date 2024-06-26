import Description from "./components/Description";
import CoffeCard from "./components/CoffeCard";
import Button from "./components/shared/Button";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [btnSelected, setBtnSelected] = useState("btn1");

  const getApi = async () => {
    const resp = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );

    // The data variable is an array of objects
    const dataApi = await resp.json();

    setData(dataApi);
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
    <div className="w-full h-full flex flex-col items-center relative">
      <img
        className="w-full"
        src="/bg-cafe.jpg"
        alt="background cooffe"
        style={{ height: "30%" }}
      />
      <div
        className="w-4/5 flex flex-col rounded-2xl items-center justify-center absolute"
        style={{
          
          marginTop: "220px",
          marginRight: "130px",
          backgroundColor: "#1B1D1F",
          ...(window.innerWidth >= 1280 &&
            window.innerWidth <= 1843 && {
              marginRight: "10px",
              width: "80%",
              height: "80%",
            }),
          ...(window.innerWidth >= 1024 &&
            window.innerWidth <= 1280 && {
              marginRight: "10px",
              width: "90%",
            }),
          ...(window.innerWidth > 816 &&
            window.innerWidth <= 1024 && {
              marginRight: "10px",
              height: "100%",
              width: "80%",
            }),
          ...(window.innerWidth < 816 && {
            width: "80%",
            marginRight: "5px",
          }),
        }}
      >
        <Description />
        <div className="w-5/12 flex justify-around mt-8">
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
