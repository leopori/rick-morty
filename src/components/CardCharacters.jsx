import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardCharacters = ({residents}) => {

    const [characterInfo, setCharacterInfo] = useState()

    useEffect(()=>{
        axios.get(residents)
        .then(res => setCharacterInfos(res.data))
        .catch(err => console.log(err))
    },[])


console.log(characterInfo)


  return (
    <article>
        <h2>{characterInfo?.name} </h2>
        <img src={characterInfo?.image} alt="" />
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