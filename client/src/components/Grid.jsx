import React from 'react'
import { useState } from 'react'

import Builder from './Builder'

export default function Grid(props) {
    //Import initial user input numbers
    let initialMin = props.rangeMin;
    let initialMax = props.rangeMax;
    let initialNum = props.initialNum



    let gridArray = []



    let newMin;
    let newMax;
    let newGuess;


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

        //newMin/newMax will be undefined on first go
        if (!newMin && !newMax) {
            newMin = initialMin;
            newMax = initialMax;

            randomNum()

        } else {
            randomNum()
        }

        setTurnCounter(turnCounter + 1)
    }

    //TESTING: will be replaced by a timed function later on. 
    //Preventing infinite loops
    function guessSearch() {
        console.log("Range is now", newMin, "to ", newMax)
        startSearch()
        setTurnCounter(turnCounter + 1)
    }

    //Generates a random number within range
    function randomNum() {
        console.log("Getting Random Number")
        console.log("Inside number generator, min and max are: ", newMin, "and ", newMax)

        newGuess = Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
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
            changeMin()

        } else if (newGuess !== initialNum && newGuess > initialNum) {
            console.log("random number is greater than target number")
            changeMax()

        } else if (newGuess === initialNum) {
            console.log("Winning condition")
        }

    }


    //If newGuess < initialNum
    //Change minimum
    //Add class to GuessNum box
    function changeMin() {
        console.log("Changing")
        newMin = newGuess
        createDivs()

        //Until Timed function is armed this needs to be commented out
        // guessSearch()
    }


    //If newGuess > initialNum 
    //Change maximum
    //Add class to GuessNum box 
    function changeMax() {
        newMax = newGuess
        createDivs()


        //Until Timed function is armed this needs to be commented out
        // guessSearch()
    }


    //IDEA: from the grid array 
    //if num >= new min then grey out
    //if num <= new max then grey out 
    //if num === guessNum & num < than targetNum then do add "smaller than guessnum" class
    //if num === guessNum & num > than targetNum then add "greater than guessnum" class
    //if num === guessNum & num === targetNum then add "winning condition"

    //May have to create a separate map function => looks like you might need to do that in a separate component
    //To do that I'll have create new array or slice off old array


    function createDivs() {
        //reset divs
        let minArr = [];
        let midArr = [];
        let maxArr = [];

        console.log("newMin inside create:, ", newMin)
        console.log("newMax inside create:, ", newMax)
        console.log("gridArray in create: ", gridArray)
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

        setSubMinArr(minArr)
        setMiddleArr(midArr)
        setSuperMaxArr(maxArr)

        gridArray = []
    }
    console.log("Grid: subMinArr: ", subMinArr)
    console.log("Grid: middleArr: ", middleArr)
    console.log("Grid: superMaxArr: ", superMaxArr)

    return (
        <div id="grid">
            <h3>Grid Area</h3>
            <button onClick={startSearch}>Start Search</button>
            <p>Number of turns: {turnCounter}</p>

            <Builder gridArray={gridArray} subMinArr={subMinArr} superMaxArr={superMaxArr} middleArr={middleArr} />

            <button onClick={guessSearch}>Guess!</button>
        </div>
    )
}
