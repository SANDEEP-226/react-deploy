import React from 'react'
import Style from "./../../modules/Body/Highlighter.module.css"
import { useState } from "react"
import FeatureTemplate from './FeatureTemplate'


function Switch(param) {
  switch (param) {
    case "Travel":
      return <FeatureTemplate id="0"/>;
    case "Wear":
      return <FeatureTemplate id="1"/>;
    case "Pack":
      return <FeatureTemplate id="2"/>;
    case "Transport":
      return <FeatureTemplate id="3"/>;
    case "Stay":
      return <FeatureTemplate id="4"/>;
    case "Food":
      return <FeatureTemplate id="5"/>;
    default:
      return "Nothing";
  } 
}

export default function Highlighter() {
  const [state, setstate] = useState("Travel");
  return (
    <div className={Style.row}>
        <div className={Style.rowTitle}><h2>Know Before You Visit Dubai in May</h2></div>
        <div className={Style.highlighterList}>
          <ul>
            <li onClick={() => setstate("Travel")}>Travel Essentials</li>
            <li onClick={() => setstate("Wear")}> What to Wear</li>
            <li onClick={() => setstate("Pack")}>What to Pack</li>
            <li onClick={() => setstate("Transport")}>Transport </li>
            <li onClick={() => setstate("Stay")}>Stay </li>
            <li onClick={() => setstate("Food")}>Food </li>
          </ul>
        </div>
        <hr/>
        <div className={Style.FeatureContainer}>
          {Switch(state)}
        </div>
    </div>
  )
}
