import styled from 'styled-components';
import {useState} from 'react';
import axios from 'axios';

function Homepage() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = event => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <StyledWeather>
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />

      <div>
        <p>{data.name}</p>
      </div>
      <div>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</div>
      <div>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>

      {data.name !== undefined && (
        <main>
          <div>
            {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels </p>
          </div>
          <div>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div>
            {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </main>
      )}
    </StyledWeather>
  );
}

const StyledWeather = styled.main`
  max-width: '375';
  max-height: '667';
  background: url('./images/Homepage.png') no-repeat center center/cover;
  position: absolute;
  max-width: 70%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  color: black;

  input {
    width: 200px;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  p {
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  main {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    color: #f8f8f8;
  }
`;

export {Homepage};
