import React from 'react'
import { useState } from 'react'


//Builder is solely to pass array info to to build appropriate classes for boxes after arrays have been passed
export default function Builder(props) {

    let subMinArr = props.subMinArr
    let showCaseArr = props.showCaseArr
    let subMidArr = props.subMidArr
    let middleArr = props.middleArr
    let superMidArr = props.superMidArr
    let superMaxArr = props.superMaxArr

    console.log(showCaseArr)

    let isWon = props.isWon
    let highlightClass = "";

    let showLessThan = props.showLessThan


    let showMoreThan = props.showMoreThan


    //Set up Classes
    if (isWon) {
        highlightClass = "winClass"
    } else if (showLessThan) {
        highlightClass = "notWinClass"
    } else if (showMoreThan) {
        highlightClass = "notWinClass"
    }

 

    console.log("submidarray", subMidArr)
    console.log("showcasearr", showCaseArr)
    console.log("middlearr", middleArr)
    console.log("superMidarr", superMidArr)
    return (
        <div className="grid-container">

            {/* grey out numbers below minimum */}

            {subMinArr ? subMinArr.map((num) => {
                return (
                    <div key={num} className={"gridbox grey"}>{num}</div>
                )
            }) : ''}

            {/* white numbers below guess but above minimum */}

            {
                subMidArr ? subMidArr.map((num) => {
                    return (
                        <div key={num} className={`gridbox`}>{num}</div>
                    )
                }) : ''
            }

            {showCaseArr ? showCaseArr.map((num) => {
                //Toggle content
                if (showLessThan) {
                    num = "<"
                } else if (showMoreThan) {
                    num = ">"
                }
                return (
                    <div key={num} className={`gridbox ${highlightClass}`}>{num}</div>
                )
            }) : ''}

            {/* white numbers below guess but above minimum */}

             {
                superMidArr ? superMidArr.map((num) => {
                    return (
                        <div key={num} className={`gridbox`}>{num}</div>
                    )
                }) : ''
            } 

            
            {middleArr ? middleArr.map((num) => {
                //Toggle content


                return (
                    <div key={num} className={`gridbox ${highlightClass}`}>{num}</div>
                )
            }) : ''}

            {superMaxArr ? superMaxArr.map((num) => {
                return (
                    <div key={num} className={"gridbox grey"}>{num}</div>
                )
            }) : ''}
        </div>
    )
}
