import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
const Card = ({showData, loadingData , weather, forecast}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastHour3 = "";
    let forecastHour6 = "";
    let forecastHour9 = "";

    if(loadingData) {
        return <Spinner/>
    }
    if(showData === true){
        url = "https://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastHour3 = forecast.list[1].dt_txt.substring(11, 13);
        forecastHour6 = forecast.list[2].dt_txt.substring(11, 13);
        forecastHour9 = forecast.list[3].dt_txt.substring(11, 13);

    return(
        <>
      <div className="container">
        <div className="card">
      <section className="section1">
        <img className="img"  alt="" />
        <div className="block">
        <h3 className="title1">{weather.name}</h3>
        <p className="parr1">{date}</p>
        <h2 className="title2">{(weather.main.temp).toFixed(1)}ºC</h2>
        <img  className="icon" src={iconUrl} alt="icon" />
        <p className="parr2">{weather.weather[0].description}</p>
        </div>
      </section>
      <section className="section2">
        <div className="sect2Container1">
        <h5>Temperatura máxima: {(weather.main.temp_max).toFixed(1)}ºC</h5>
        <h5>Temperatura mínima: {(weather.main.temp_min).toFixed(1)}ºC</h5>
        <h5>Sensación térmica: {(weather.main.feels_like).toFixed(1)}ºC</h5>
        <h5>Humedad: {(weather.main.humidity)}%</h5>
        <h5>Velocidad del viento: {(weather.wind.speed)}m/s</h5>
        </div>
        <hr color="#77567A" />
        <div className="sect2Container2">
        <div className="forecast1">
            <p >{forecastHour3}h</p>
            <h2 className="forecastDesc">{(forecast.list[1].weather[0].description)}</h2>
            <img src={iconUrl3} alt="" />
            <p >{(forecast.list[1].main.temp).toFixed(1)}ºC</p>
        </div>
        <div className="forecast1">
        <p>{forecastHour6}h</p>
            <h2 className="forecastDesc">{(forecast.list[2].weather[0].description)}</h2>
            <img src={iconUrl6} alt="" />
            <p>{(forecast.list[2].main.temp).toFixed(1)}ºC</p>
        </div>
        <div className="forecast1">
        <p>{forecastHour9}h</p>
            <h2 className="forecastDesc">{(forecast.list[3].weather[0].description)}</h2>
            <img src={iconUrl9} alt="" />
            <p>{(forecast.list[3].main.temp).toFixed(1)}ºC</p>
        </div>
        </div>
      </section>
      </div>
      </div>
      </>
    );
    } else {
        return(
            <>
            <h2 className="defDescription">Sin datos</h2>
            </>
        )
    }
}
export default Card;