import React from 'react'


//Builder is solely to pass array info to to build appropriate classes for boxes after arrays have been passed
export default function Builder(props) {

    let subMinArr = props.subMinArr
    let middleArr = props.middleArr
    let superMaxArr = props.superMaxArr

    let isWon = props.isWon
    let highlightClass = "";

    let showLessThan = props.showLessThan
    let showLessThanClass = ""
    let showLessThanSymbol = ""

    let showMoreThan = props.showMoreThan
    let showMoreThanClass = ""
    let showMOreThanSymbol = ""

    console.log(isWon)
    if(isWon){
        highlightClass = "winClass"
    } else if(showLessThan){
        highlightClass = "notWinClass"
    } else if (showMoreThan){
        highlightClass = "notWinClass"
    }


    return (
        <div className="grid-container">

            {subMinArr ? subMinArr.map((num) => {
                return (
                    <div key={num} className={"gridbox grey"}>{num}</div>
                )
            }) : ''}

            {middleArr ? middleArr.map((num) => {
                //Toggle content
                if(showLessThan){
                    num = "<"
                } else if (showMoreThan){
                    num = ">"
                }
                return (
                    <div key={num} className={`gridbox ${highlightClass}`}>{num}</div>
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
