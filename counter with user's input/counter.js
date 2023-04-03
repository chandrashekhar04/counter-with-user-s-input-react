import { useState } from "react"
import "./counter.css"

function Counter(){

    let [ Count, setCount ] = useState(7)

    function Increase(){
        if(Count<15){
            setCount(Count+1)
        }
    }
    function Decrease(){
        if(Count>5){
            setCount(Count-1)
        }
    }

    return(
    <>
    <div id="main">
        <button onClick={Increase}>Increment</button>
            <p>{Count}</p>
        <button onClick={Decrease}>Decrement</button>
    </div>
    </>
    )
}

export default Counter
