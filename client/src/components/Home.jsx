import React from 'react'
import { useState } from 'react'

import Grid from './Grid'
export default function Home() {
    //Initial input box State//
    let [initialNum, setInitialNum] = useState("")

    //Set The Desired Range
    //For now it will be between 1 and 100 for ease of sake
    let [rangeMin, setRangeMin] = useState("")
    let [rangeMax, setRangeMax] = useState("")


    //Start Button//
    let [startGrid, setStartGrid] = useState()
    function startHandler() {
        console.log("Start Handler Input", typeof (parseInt(initialNum)), initialNum)
        console.log("Start Handler rangeMin", typeof (parseInt(rangeMin)), rangeMin)
        console.log("Start Handler rangeMax", typeof (parseInt(rangeMax)), rangeMax)

        setStartGrid ( <Grid rangeMin={parseInt(rangeMin)} rangeMax={parseInt(rangeMax)} initialNum = {parseInt(initialNum)}/> )
    }   

    //Disables Start Unless conditions are met
    let disabledVar;
    let rangeCheckAlert = []
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
            <button disabled={disabledVar} onClick={startHandler}>Begin</button>
            <p> {rangeCheckAlert} </p>
            </div>

            {startGrid}
          

        </div>
    )
}
