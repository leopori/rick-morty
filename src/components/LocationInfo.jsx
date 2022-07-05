import React from 'react'

const LocationInfo = ({ location }) => {


    console.log(location)

    return (
        <article className='wrapper blueback'>
            <h2> {location ? location.name :'Not Found'} </h2>
            <ul className='location-info'>
                <li><spam><h3>Type: </h3></spam> {location ? location.type :'Not Found'}</li>
                <li><spam><h3>Dimension:</h3></spam> {location ?location.dimension :'Not Found'} </li>
                <li><spam><h3>Number of Residents:</h3></spam> {location ? location.residents.length :'Not Found'}</li>
            </ul>

        </article>
    )
}

export default LocationInfo