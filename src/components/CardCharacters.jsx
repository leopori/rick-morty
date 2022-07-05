import React from 'react'
import useCharacterInf from '../hook/useCharacterInf'

const CardCharacters = ({ residents }) => {


    const characterInfo = useCharacterInf(residents)



    return (
        <article className='card-character blueback '>
            <h2>{characterInfo?.name} </h2>
            <img className='character-img' src={ characterInfo?.image} alt="" />
            <ul>
                <li><h3>Status:</h3>
                    <spam><p>{characterInfo?.status} </p></spam>
                </li>
                <li>
                    <h3>Origin:</h3>
                    <spam>{characterInfo?.origin.name} </spam>
                </li>
                <li><h3>Times of Appearences:</h3>
                    <spam>{characterInfo?.episode.length} </spam>
                </li>
            </ul>


        </article>
    )
}

export default CardCharacters