import React from 'react'
import { useState } from 'react'

import Grid from './Grid'
export default function Home() {
    //Initial input box State//
    let [initialNum, setInitialNum] = useState("")

    //Set The Desired Range
    let [rangeMin, setRangeMin] = useState("")
    let [rangeMax, setRangeMax] = useState("")

    //Set Timer in milliseconds
    let [timer, setTimer] = useState("")


    //Start Button//
    let [startGrid, setStartGrid] = useState()
    function startHandler() {

        setStartGrid ( <Grid rangeMin={parseInt(rangeMin)} rangeMax={parseInt(rangeMax)} initialNum = {parseInt(initialNum)} timer={timer}/> )
    }   

    //Disables Start Unless conditions are met
    let disabledVar;

    if (rangeMin &&
        rangeMax &&
        initialNum &&

        //Turn all them strings into nums
        parseInt(rangeMin) <= parseInt(initialNum) &&
        parseInt(rangeMax) >= parseInt(initialNum)
    ) {
        disabledVar = false

    } else {
        disabledVar = true
    }

    //Reset Button
    
    function resetBoard() {
        setInitialNum("")
        setRangeMin("")
        setRangeMax("")
        setTimer("")

        setStartGrid ()
    }

    return (
        <div>
            <div>
            <p>Set the computer's min and max range</p>
            <p>Min Range: </p>
            <input type="number" value={rangeMin} onChange={event => setRangeMin(event.target.value)}></input>

            <p>Max Range: </p>
            <input type="number" value={rangeMax} onChange={event => setRangeMax(event.target.value)}></input>

            <p>Choose your number between the range click "Begin"</p>
            <input type="number" value={initialNum} onChange={event => setInitialNum(event.target.value)}></input>

            <p>How slow would you like the timer to be? Write in seconds: </p>
            <input type="number" value={timer} onChange={event => setTimer(event.target.value)}></input>
            <button disabled={disabledVar} onClick={startHandler}>Begin</button>
    
            </div>

            {startGrid}
          
            <div>
                <button onClick={resetBoard}>Reset</button>
            </div>

        </div>
    )
}
