import { useState } from "react"


function Hog({ hog }) {
    const [click, setClick] = useState(false)
    function handleClick(){
        setClick(!click)
    }
    return (
        <div className="ui grid container" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.specialty}></img>
            {click ? <p>Specialty: {hog.specialty}</p>: null}
            {click ? <p>Greased: {hog.greased ? "True" : "False"}</p>: null}
            {click ? <p>Weight: {hog.weight}</p>: null}
            {click ? <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>: null}
        </div>
    )
}

export default Hog