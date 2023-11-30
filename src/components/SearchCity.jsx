import  { useState } from 'react';



// eslint-disable-next-line react/prop-types
const SearchCity = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const handleSearchCity = (ev) => {
    setCity(ev.target.value);
  }
  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log({city});
    if(city === "" || !city){
    return ;}
    else {
      newLocation(city);
    }
  }
    return (
        <div className='searchCity'>
        <form className='searchCityForm' onSubmit={onSubmit} >
          <input className="searchCityInput" type="text" name="searchCityInput" id="searchCityInput"
          value={city} onChange={handleSearchCity} placeholder=' Entra tu localización...' />
          <button className='searchCityBtn' type='submit'>Buscar</button>
        </form>
      </div>
    
    )
}
export default SearchCity;