import React from 'react'

export default function Grid(props) {
    //Import initial user input numbers
    let initialMin = props.rangeMin;
    let initialMax = props.rangeMax;
    let initialNum = props.initialNum


    //Create a workable array with glossary of availbale numbers
    //This will allow you to map over and create divs with keys and content mirroring index
    let gridArray = []
    for (let i = initialMin; i <= initialMax; i++) {
        gridArray.push(i)
    }

    let newMin;
    let newMax;
    let newGuess;
    function startSearch() {
        console.log("You started your search")
        
        //newMin/newMax will be undefined on first go
        if(!newMin && !newMax){
            newMin = initialMin;
            newMax = initialMax;

            randomNum(newMin, newMax)
        } else {
            randomNum()
        }


    }

    //Generates a random number within range
    function randomNum(newMin, newMax) {
        console.log("Getting Random Number")

        newGuess = Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
        console.log( newGuess)

        checkNum()

        
    }

    //Check if number is the right one
    //If guessNum is incorrect AND smaller than the target number then... res
    //If guessNum is incorrect AND larger than the target number then...
    function checkNum() {
        console.log("Checknum newGuess: ", newGuess)
        console.log("Checknum intialNum: ", initialNum)

        if(newGuess !== initialNum && newGuess < initialNum){
            console.log("random number is less than target number")
            changeMin()
           
        } else if (newGuess !== initialNum && newGuess > initialNum){
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

    }

    //If newGuess > initialNum 
        //Change maximum
        //Add class to GuessNum box 
    function changeMax() {

    }

    return (
        <div id="grid">
            <h3>Grid Area</h3>
            <button onClick={startSearch}>Start Search</button>
            <div className="grid-container">

                {gridArray.map((num) => {
                    return (
                        <div key={num} className={"gridbox"}>{num}</div>
                    )
                })}
            </div>
        </div>
    )
}
