import React from 'react'

const InputSearch = ({setLocationSearch}) => {



const searchLocation = e => {
    e.preventDefault()
    setLocationSearch(e.target.children[0].value)

}

  return (
    
    <form className='wrapper location-Search' onSubmit={searchLocation}>
        <input type="text" />
        <button>Search</button>
    </form>
  )
}

export default InputSearch