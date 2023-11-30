import {useState} from 'react';
import { Fragment } from 'react';
import SearchCity from './SearchCity';
import Card from './Card';


const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=945abf8961629fa61c0c74f37abdb7a6&lang=es&units=metric";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=945abf8961629fa61c0c74f37abdb7a6&lang=es&units=metric";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);

    const [loading, setLoading] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //LLamada a la api de tiempo real
        urlWeather = urlWeather + cityUrl + loc;
        await fetch(urlWeather)
        .then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
            setShowCard(false);
        })

        // LLamada a la api de tiempo futura
        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast)
        .then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData);
            setLoading(false);
            setShowCard(true);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
            setShowCard(false);
        })
    }

    return (
        <Fragment>
            <SearchCity
            newLocation = {getLocation}
            />
            <Card
            showData = {showCard}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
            />
        </Fragment>
    );
}

export default WeatherPanel;