import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCharacters from './components/CardCharacters'
import LocationInfo from './components/LocationInfo'


const RickAndMortyApp = () => {

  const [location, setLocation] = useState()

  useEffect(() => {

    const randomNumber = Math.ceil(Math.random() * 126)
    const URL = `https://rickandmortyapi.com/api/location/${randomNumber}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }, [])




  return (
    <div>
      <LocationInfo
        location={location}
      />
<div>
  {location?.residents.map(residents =>(
    <CardCharacters
    residents ={residents}
    key={residents}
    />
  ))}
</div>

    </div>
  )
}

export default RickAndMortyApp