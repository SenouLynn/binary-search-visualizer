import React from 'react'


//Builder is solely to pass array info to to build appropriate classes for boxes after arrays have been passed
export default function Builder(props) {

    let subMinArr = props.subMinArr
    let middleArr = props.middleArr
    let superMaxArr = props.superMaxArr

    let isWon = props.isWon
    let winClass = ""
    console.log(isWon)
    if(isWon){
        winClass = "winClass"
    }


    return (
        <div className="grid-container">

            {/* {gridArray.map((num) => {
                return (
                    <div key={num} className={"gridbox"}>{num}</div>
                )
            })} */}

            {subMinArr ? subMinArr.map((num) => {
                return (
                    <div key={num} className={"gridbox grey"}>{num}</div>
                )
            }) : ''}

            {middleArr ? middleArr.map((num) => {

                return (
                    <div key={num} className={`gridbox ${winClass}`}>{num}</div>
                )
            }) : ''}

            {superMaxArr ? superMaxArr.map((num)=>{
                return(
                    <div key={num} className={"gridbox grey"}>{num}</div>
                )
            }) : ''}
        </div>
    )
}
