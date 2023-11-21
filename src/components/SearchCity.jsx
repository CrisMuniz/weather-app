import { useState } from 'react';

function SearchCity ( ) {
  const [city, setCity] = useState("");

  const handleSearchCity = (ev) => {
    setCity(ev.target.value);
  }
  const onSubmit = (ev) => {
    ev.preventDefault();
    //console.log({city})
    if(city === "" || !city) return;
  }
    return (
        <div className='searchCity'>
        <form className='searchCityForm' onSubmit={onSubmit} >
          <input className="searchCityInput" type="text" name="" id="" 
          value={city} onChange={handleSearchCity} placeholder='  Entra tu localización...' />
          <button className='searchCityBtn' type='submit'>Buscar</button>
        </form>
      </div>
    )
}
export default SearchCity;