import React from 'react'

const LocationInfo = ({ location }) => {


    console.log(location)

    return (
        <article>
            <h2> {location?.name} </h2>
            <ul>
                <li><spam><h3>Type: </h3>{location?.type}</spam></li>
                <li><spam><h3>Dimension:</h3></spam> {location?.dimension} </li>
                <li><spam><h3>Number of Residents:</h3></spam> {location?.residents.length}</li>
            </ul>

        </article>
    )
}

export default LocationInfo