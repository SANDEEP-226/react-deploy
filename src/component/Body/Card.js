import React from 'react'
import { Link } from 'react-router-dom';
import Style from './../../modules/Body/Card.module.css'
import { TwoColumnContent } from "./TwoColumn"
import { ThreeColumnContent } from "./ThreeColumn"
import { FourColumnContent } from "./FourColumn"
import data from "./../../Json/ColumnCotent.json"

function findHeight(type) {
    switch (type) {
        case "twoColumn":
            return "300px"
        case "threeColumn":
            return "230px"
        case "fourColumn":
            return "200px"
        default:
            return "";
    }
}

function Switch(type , payload){
    switch (type) {
        case "twoColumn":
            return <TwoColumnContent data = { payload }/>
        case "threeColumn":
            return <ThreeColumnContent data = { payload }/>
        case "fourColumn":
            return <FourColumnContent data = { payload }/>
        default:
            return "Nothing";
    }
}

export default function Card({type , value}) {
    const img = "http://localhost:1337"+value.Image.data.attributes.url;
  return (
       
            <div className={Style.cardContainer}>
                 <Link to={ `/product/${value.id}`}>
                 <div className={Style.imageContainer }>
                    <img src={img} style={{height:findHeight(type)}} />
                </div>
                 </Link>
                
                <div className={Style.contentContainer}>
                    {Switch(type,value.Content)}
                </div>
            </div>
  )
}