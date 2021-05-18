import React from 'react'

export default function Grid(props) {
    //Import initial user input numbers
    let initialMin = props.rangeMin;
    let initialMax = props.rangeMax;
    let initialNum = props.initialNum


    //Create a workable array with glossary of availbale numbers
    let gridArray= []
    for(let i = initialMin; i <= initialMax; i++ ){
        gridArray.push(i)
    }
    console.log(gridArray)

    return (
        <div id="grid">
            <h3>Grid Area</h3>
            <div className="grid-container">
            {gridArray.map((num) => {
                return(
                    <div key={num} className={"gridbox"}>{num}</div>
                )
            })}
            </div>
        </div>
    )
}
