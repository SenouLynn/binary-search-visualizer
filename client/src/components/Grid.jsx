import React from 'react'
import { useState, useEffect } from 'react'

import Builder from './Builder'

export default function Grid(props) {
    //Import initial user input numbers
    let initialMin = props.rangeMin;
    let initialMax = props.rangeMax;
    let initialNum = props.initialNum



    let gridArray = []

    let [winCondition, setWinCondition] = useState(false)




    let [newMin, setNewMin] = useState(initialMin)
    let [newMax, setNewMax] = useState(initialMax)

    let newGuess;
    let [guessState, setGuessState] = useState()


    let [subMinArr, setSubMinArr] = useState([]);
    let [middleArr, setMiddleArr] = useState([]);
    let [superMaxArr, setSuperMaxArr] = useState([]);

    let [turnCounter, setTurnCounter] = useState(0)





    //Create a workable array with glossary of availbale numbers
    //This will allow you to map over and create divs with keys and content mirroring index
    for (let i = initialMin; i <= initialMax; i++) {
        gridArray.push(i)
    }

    //Check Block, otherwise shit hits the fan and get's weird. I think it preserves state but every "refresh" it adds two more of the index
    if (turnCounter === 0) {

        // This pushes all of the numbers in Grid Array (granddaddy holder) to middle array (base styling)
        gridArray.forEach((num) => {
            middleArr.push(num)
        })

    }
    function startSearch() {
        console.log("You started your search")

        //Turns off timer function until loop has run
        setTrigger(false)

        //newMin/newMax will be undefined on first go
        if (!newMin && !newMax) {
            setNewMin(initialMin)
            setNewMax(initialMax);

            randomNum()

        } else {
            randomNum()
        }

        setTurnCounter(turnCounter + 1)
    }



    let [trigger, setTrigger] = useState(false)
    //Timer function 
    //Right now it's not on a loop, it will run after a certain amount of time hoping that react has figured it's shit out in time
    useEffect(() => {
        if (trigger && middleArr && !winCondition) {
            const timer = setTimeout(() => {
                console.log("inside timer")
                startSearch()
                setTurnCounter(turnCounter + 1)
            }, 2000);
            return () => clearTimeout(timer);
        }
    });

    //Generates a random number within range
    function randomNum() {
        console.log("Inside number generator, min and max are: ", newMin, "and ", newMax)

        let inclusive = 1
        if (turnCounter > 1) {
            inclusive = 0
        }

        newGuess = Math.floor(Math.random() * (newMax - newMin + inclusive) + newMin)

        setGuessState(newGuess)
        console.log(newGuess)

        checkNum()
    }

    //Check if number is the right one
    //If guessNum is incorrect AND smaller than the target number then... res
    //If guessNum is incorrect AND larger than the target number then...
    function checkNum() {
        console.log("Checknum newGuess: ", newGuess)
        if (newGuess !== initialNum && newGuess < initialNum) {
            console.log("random number is less than target number")
            setNewMin(newGuess)

        } else if (newGuess !== initialNum && newGuess > initialNum) {
            console.log("random number is greater than target number")
            setNewMax(newGuess)

        } else if (newGuess === initialNum) {
            console.log("Winning condition")

            setWinCondition(true)
        }

        createDivs()
    }

    function createDivs() {
        //reset divs
        let minArr = [];
        let midArr = [];
        let maxArr = [];

        if (newGuess !== initialNum) {
            gridArray.forEach((num) => {
                // console.log(subMinArr)
                if (num < newMin) {
                    minArr.push(num)
                } else if (num <= newMax && num >= newMin) {
                    midArr.push(num)
                }
                else if (num > newMax) {
                    maxArr.push(num)
                }
            })
        } else if (newGuess === initialNum) {

            //Set up Winning Condition 

            gridArray.forEach((num) => {
                // console.log(subMinArr)
                if (num < newGuess) {
                    minArr.push(num)
                } else if (num === newGuess) {
                    midArr.push(num)
                }
                else if (num > newGuess) {
                    maxArr.push(num)
                }
            })


        }

        //Set arrays for classes
        setSubMinArr(minArr)
        setMiddleArr(midArr)
        setSuperMaxArr(maxArr)


        //Grid Array Reset
        gridArray = []

        //Toggle Trigger to reset timer
        setTrigger(true)
    }

    //Pause search but preserve state
    function pauseSearch (){
        setTrigger(false)
    }


    console.log(middleArr)
    return (
        <div id="grid">
            <h3>Grid Area</h3>
            <button onClick={startSearch}>Start Search</button>
            <button onClick={pauseSearch}>Pause</button>
            <div className="info-box">
                <p>Number of turns: {turnCounter}</p>
                <p>Computer Guess: {guessState}</p>
                <p>Minimum: {newMin}</p>
                <p>Maximum: {newMax}</p>
            </div>

            <Builder gridArray={gridArray} subMinArr={subMinArr} superMaxArr={superMaxArr} middleArr={middleArr} isWon={winCondition} />

        </div>
    )
}
