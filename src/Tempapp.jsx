import React, { useEffect, useState } from "react";

const Tempapp = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("dhaka");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f406ccc88af8f8a41375997bb0c59c2`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputdata">
            <input
              type="text"
              className="inputfield"
              onChange={(event) => {
                setsearch(event.target.value);
              }}
            />
          </div>

          {!city ? (
            <p>no data</p>
          ) : (
            <>
              <div id="weathericon" className="text-center">
                <i className="fa-solid fa-sun" style={{ color: "yellow" }}></i>
              </div>
              <div className="info">
                <h2 className="location">
                  <i
                    className="fa-solid fa-street-view"
                    style={{ color: "white" }}
                  ></i>
                  {search}
                </h2>
                <p id="date">wed| oct 23|10:49am</p>
                <h1 className="temp">{city.temp}</h1>
                <h3>
                  {city.temp_min}C°|{city.temp_max}C°
                </h3>
                <div className="wave"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Tempapp;
