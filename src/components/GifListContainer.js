import { useState, useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [userSearch,setUserSearch] = useState("dolphin")
    function searchQuery(value){
     setUserSearch(value)
     console.log(userSearch)
    }
    const [gifsData, setGifsData] = useState("")
    useEffect(() => {
        fetch ("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=QQ9W5AEbnMf55UXiMWleObwpSzIjTB45&rating=g")
          .then((r) => r.json())
            .then((data) => gifsData(data))
            
    }, [userSearch])
    // console.log(setGifsData)
    return (
        <div>
            <GifSearch searchQuery={searchQuery}/>
            {gifsData !== "" ? <GifList gifsList={gifsData}/> : console.log("loading")}
        </div>
    )
}
export default GifListContainer;