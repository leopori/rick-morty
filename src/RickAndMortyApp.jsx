import React, { useState } from 'react'
import CardCharacters from './components/CardCharacters'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hook/useLocationApi'



const RickAndMortyApp = () => {

const [locationSearch, setLocationSearch] = useState()


  const location = useLocationApi(locationSearch)

  return (
    <div className='App'>
      <img className='backRickMorty' src="./src/img/1366_2000.jpeg" alt="" />
      <InputSearch
      setLocationSearch={setLocationSearch}
      /> 
      <LocationInfo
        location={location}
      />
      <div className='div-flex wrapper'>
        {location?.residents.map(residents => (
          <CardCharacters
            residents={residents}
            key={residents}
          />
        ))}
      </div>

    </div>
  )
}

export default RickAndMortyApp