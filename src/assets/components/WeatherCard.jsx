import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  console.log(weather);

  const [isCelsius, setIsCelsius] = useState(true);

  const handleClick = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <article className="card">
      <h1 className="card__title">Weather App</h1>
      <h2 className="card__subtitle">
        {weather?.name}, {weather?.sys.country}
      </h2>

      <div className="card__body">
        <div className="card__img-container">
          <img
            className="card__img"
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>

        <section className="card__info">
          <h3 className="card__info-title">
            {weather?.weather[0].description}
          </h3>

          <ul className="card__list">
            <li className="card__item">
              <i class="fa-solid fa-wind card__icon"></i>
              <span className="card__info-label">Wind speed</span>
              {weather?.wind.speed}{" "}
            </li>
            <li className="card__item">
              <i class="fa-solid fa-cloud card__icon"></i>
              <span className="card__info-label">Clouds</span>
              {weather?.clouds.all}%
            </li>
            <li className="card__item">
              <i class="fa-solid fa-temperature-three-quarters card__icon"></i>
              <span className="card__info-label">Pressure</span>
              {weather?.clouds.all}
              {weather?.main.pressure}
            </li>
          </ul>
        </section>
      </div>

      <footer className="card__footer">
        <h2 className="card__temperature">
          {isCelsius
            ? temperature?.celsius + "°F"
            : temperature?.farenheit + "°C"}
        </h2>
        <button className="card__btn" onClick={handleClick}>
          Change to °{isCelsius ? "C" : "F"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;
