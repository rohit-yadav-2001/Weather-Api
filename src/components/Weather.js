import React, { useEffect, useState } from "react";
import "./css/style.css";

const Weather = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Noida");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cbe4bb172685c82160c081070d81c7d3`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson)
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            value={search}
            className="inputfeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        {!city ? (
          <p className="errorMsg">No Data found</p>
        ) : (
          <>
            <div className="info">
              <h1 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h1>
              <h2 className="temp">
                {city.temp}
                </h2>
              <h3 className="temp-min-max">Min: {city.temp_min} || Max:{city.temp_max}</h3>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default Weather;
