import { useEffect, useState } from "react";

const ShowList = ()=>{

    const[allShows, setAllshows] = useState([])
    

    useEffect(
        ()=>{
            fetch()
            .then(response =>response.json())
            .then (arr => setAllshows(arr))
        }
        ,
        []
    )

    const showsToRender = allShows.map(()=>

<div>
    <h4>{eachShow.title}</h4>
</div>
    )

return(<div>

<h1>All Shows</h1>
{showsToRender}
</div>
)

}

export default ShowList