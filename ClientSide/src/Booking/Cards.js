import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { isVehicleItem } from '../Utils/VehicleUtils';
import './../Components/Style/cards.css';

export default function Cards() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://car-rental-app-server.onrender.com/cars/")
      .then(res => res.json())
      .then(res => {
        // Filter out non-vehicle items
        const vehicleOnly = res.filter(isVehicleItem);
        setdata(vehicleOnly);
      });
  }, []);

  return (
    <div id="mainParents">
      <div id="carCard">
        {data.map((d, i) => (
          <CarCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
}
