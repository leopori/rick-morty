import axios from "axios"
import { useEffect, useState } from "react"


const useLocationApi = setSearchLocation => {

    const [location, setLocation] = useState()

    useEffect(() => {

        let locationNumber
        if (setSearchLocation) {
            locationNumber = setSearchLocation
        } else {
            locationNumber = Math.ceil(Math.random() * 126)
        }


        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))

    }, [setSearchLocation])

    return location
}

export default useLocationApi