import React, { useState } from 'react'
import CardCharacters from './components/CardCharacters'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hook/useLocationApi'
import Pagination from './components/Pagination'



const RickAndMortyApp = () => {

  const [locationSearch, setLocationSearch] = useState()

  const [currentPage, setCurrentPage] = useState(1)




  const location = useLocationApi(locationSearch)


  let arrayResidents = []
  const residentPerPage = 6

  if (location?.residents.length < residentPerPage) {
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)

  }


  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }



  return (
    <div className='App'>
      <div className='header__logo-box'>
      
      </div>
      <div className='for-typing'>
      <h1 >Ya escribe algo!!</h1>
      </div>
      
      <InputSearch
        setLocationSearch={setLocationSearch}
      />
      <LocationInfo
        location={location}
      />
      <div className='div-flex wrapper'>
        {arrayResidents?.map(residents => (
          <CardCharacters
            residents={residents}
            key={residents}
          />
        ))}
      </div>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </div>
  )
}

export default RickAndMortyApp