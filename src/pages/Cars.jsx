import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cars from "../assets/data/cars.js";
import "../styles/cars.css";

const Cars = () => {
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    handleFilteredCars();
  }, [search, category]);

  const handleFilteredCars = () => {
    setFilteredCars(
      cars.filter((car) => {
        if (category === "All") {
          return search.toLowerCase() === "" &&
            car.CarBodyType.includes(category)
            ? car
            : car.brand.toLowerCase().includes(search);
        }
        return search.toLowerCase() === "" && car.CarBodyType.includes(category)
          ? car
          : car.brand.toLowerCase().includes(search) &&
              car.CarBodyType.includes(category);
      })
    );
  };

  const categoryButtons = [
    { id: 1, label: "All" },
    { id: 2, label: "Sedan" },
    { id: 3, label: "SUV" },
    { id: 4, label: "Hatchback" },
  ];

  return (
    <div className="cars">
      <h1>Our Cars</h1>
      {/* =========================== search filter ======================== */}

      <div className="search-car">
        <div>
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="search by brand"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <p><span>{filteredCars.length}</span> vehicles available</p>
        </div>
      </div>

      {/* =========================== select body type ======================== */}
      <div className="car-body-type">
        <div>
          {categoryButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setCategory(button.label)}
              className={button.label === category ? "active" : ""}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* =========================== cars ======================== */}
      <div className="cars-container">
        {filteredCars.length < 1 ? (
          <div className="no-car-available">
            <p>No car available</p>
          </div>
        ) : (
          filteredCars.map((car, index) => (
            <div key={index} className="car-cart">
              <Link to={car.id}>
                <h2>{car.brand}</h2>
                <div className="car-cart-image">
                  <img src={car.image} alt="" />
                </div>
                <h3>
                  {car.brand} {car.CarBodyType} or similar
                </h3>
                <div className="car-cart-description">
                  <p>
                    <span className="material-symbols-outlined">person</span> X{" "}
                    {car.Capacity} passengers
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      auto_transmission
                    </span>
                    {car.Transmission} transmission
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      local_gas_station
                    </span>
                    {car.GasType}
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>{" "}
                    X {car.NumberOfDoors} doors
                  </p>
                  <p>
                    <span className="material-symbols-outlined">videocam</span>
                    {car.ReverseCamera}
                  </p>
                  <p>
                    <span className="material-symbols-outlined">{`${
                      car.AudioConnection === "Bluetooth"
                        ? "bluetooth_drive"
                        : "usb"
                    }`}</span>{" "}
                    Audio connection {car.AudioConnection}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cars;
