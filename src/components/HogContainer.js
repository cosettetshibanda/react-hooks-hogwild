import { useState } from "react"
import Hog from "./Hog"

function HogContainer ({ hogs }){
    const [greased, setGreased] = useState(false)
    const [sort, setSort] = useState("None")
   
    function filterAndSortHogs(){
        const filtered = hogs.filter(hog => {
            if(greased){
                return hog.greased
            } 
            else{
                return true
            }
        })
        if(sort === "None"){
            return filtered
        } else if (sort === "Name"){
            return filtered.sort((a,b) => {
                if(a.name > b.name){
                    return 1
                } else {
                    return -1
                }
            })
        } else {
                return filtered.sort((a,b) => {
                    if(a.weight > b.weight){
                        return 1
                    } else {
                        return -1
                    }
                })
        }
    }
    function renderHogs() {
        return filterAndSortHogs().map(hog => {
            return <Hog hog={hog} key={hog.name}/>
        })
    }


    function handleClick(){
        setGreased(!greased)
    }

    function handleChange(event){
        setSort(event.target.value)
    }

    return(
        <div className="ui eight wide column">
            <button onClick={handleClick} >{greased ? "All Hogs" : "Greased Hogs Only"}</button>
            <select onChange={handleChange}>
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
            {renderHogs()}
        </div>
    )
}

export default HogContainer