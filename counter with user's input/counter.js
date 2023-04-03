import { useState } from "react"
import "./counter.css"

function Counter(){

    let [ Count, setCount ] = useState(0)

    let [firstValue, setFirstValue]= useState('');
    let [secondValue, setSecondValue]= useState();

    let[Value, setValue]=useState('')
    let[SecValue, setSecValue]=useState('')

    function Increase(){
        if(Count!=Value){
            setCount(Count+1)
        }
    }

    function Decrease(){
        if(Count!=secondValue){
            setCount(Count-1)
        }
    }

    function firstChange(event){
        setFirstValue(event.target.value)
    }

    function secondChange(event){
        setSecondValue(event.target.value)
    }

    function GoValue(){
        setValue(firstValue)
        setSecValue(secondValue)
    }
    return(
    <>
    <div id="main">

        <div className="first">
            <div className="one">
                <input type='number' value={firstValue} placeholder='Up To Iecrement' onChange={firstChange}></input>
                <p>{Value}</p>
            </div>
            <div className="two">
                <input type='number' value={secondValue} placeholder='Up To Decrement' onChange={secondChange}></input>
                <p>{SecValue}</p>
            </div>
            <button onClick={GoValue}>Go</button>
        </div>

        <div className="second">
            
            
        </div>

        <div className="third">
            <button onClick={Increase}>Increment</button>
                <p>{Count}</p>
            <button onClick={Decrease}>Decrement</button>
        </div>

    </div>
    </>
    )
}

export default Counter
