import axios from "axios"
import { useEffect, useState } from "react"


const useCharacterInf = residents  => {

    const [characterInfo, setCharacterInfo] = useState()

    useEffect(() => {
        axios.get(residents)
            .then(res => setCharacterInfo(res.data))
            .catch(err => console.log(err))
    }, [])



  return characterInfo
}

export default useCharacterInf