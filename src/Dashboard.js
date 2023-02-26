import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";
import { auth, logout } from "./firebase";

function Dashboard() {
  const [loading ] = useAuthState(auth);
  const [weather, setWeather] = useState([]);

  const fetchColomboWeather = async () => {

    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=6.9271%2C79.8612';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dd492a5d5emsh560d82943d77095p13179cjsnfd8cc1d8226e',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

          fetch(url,options)
             .then((res) => res.json())
             .then((data) => {
                console.log(data);
                setWeather(data);
             })
             .catch((err) => {
                console.log(err.message);
             });
}



  useEffect(() => {
    if (loading) return;
    fetchColomboWeather();
  }, [loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h2>Colombo Weather</h2>
        <div>Condition : {weather?.current?.condition?.text}</div>
        <div>Temp (Celsius) : {weather?.current?.temp_c}</div>
        <div>Wind (KPH) : {weather?.current?.wind_kph}</div>
        <div>Humidity : {weather?.current?.humidity}</div>
        <div>Time : {weather?.location?.localtime}</div>
        <div></div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;