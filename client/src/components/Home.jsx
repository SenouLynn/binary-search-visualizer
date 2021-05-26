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

    let [selectState, setSelectState] = useState("")

    //Start Button//
    let [startGrid, setStartGrid] = useState()
    function startHandler() {

        setStartGrid(<Grid rangeMin={parseInt(rangeMin)} rangeMax={parseInt(rangeMax)} initialNum={parseInt(initialNum)} timer={timer} selectState={selectState} />)
    }

    //Disables Start Unless conditions are met
    let disabledVar;

    if (rangeMin &&
        rangeMax &&
        initialNum &&
        timer &&


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

        setStartGrid()
    }


    return (
        <div className="main-body">
            <div className="sub-body">
                <div className="input-box">
                    <div className="input-container">
                        <div>

                            <p>Min Range: </p>
                            <input type="number" value={rangeMin} onChange={event => setRangeMin(event.target.value)}></input>
                        </div>

                        <hr></hr>

                        <div>
                            <p>Max Range: </p>
                            <input type="number" value={rangeMax} onChange={event => setRangeMax(event.target.value)}></input>
                        </div>

                        <hr></hr>


                        <div>
                            <p>Target Number:</p>
                            <input type="number" value={initialNum} onChange={event => setInitialNum(event.target.value)}></input>
                        </div>

                        <hr></hr>

                        <div>
                            <p>Timer Length (secs): </p>
                            <input type="number" value={timer} onChange={event => setTimer(event.target.value)}></input>
                        </div>

                        <hr></hr>

                        <div>
                            <p>Guess Type: </p>
                            <select className="game-type" value={selectState} onChange={event => setSelectState(event.target.value)}>
                                <option value="random-num">Random Number Generator</option>
                                <option value="true-binary">True Binary</option>
                            </select>
                        </div>



                        <div className="button-box">
                            <button disabled={disabledVar} onClick={startHandler}>Begin</button>

                            <button onClick={resetBoard}>Reset</button>
                        </div>
                    </div>
                </div>

                {startGrid}
            </div>
        </div>
    )
}
