import React from "react";

function GifList({gifsList}){
    console.log(gifsList)
    const ulContent = gifsList.map((element)=>{
     return <li key={element.id}>
        <img src={element.images.original.url} />
     </li>
      })
    return(
        <ul>
            {ulContent}
        </ul>
    )
  }
    export default GifList