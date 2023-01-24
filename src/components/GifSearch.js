import { useState } from "react"
function GifSearch({ searchQuery }) {
    const [userSearch, setUserSearch] = useState("")
    function handleSubmit(event) {
        event.preventDefault()
        searchQuery(userSearch)
    }
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Look for a GIF..." onChange={(e) => setUserSearch(e.target.value)}></input>
            <button type="submit">Search</button>
    </form>
    )
}
export default GifSearch