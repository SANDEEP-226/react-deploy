import React from 'react'
import Style from "./../../modules/Product/VariantContainer.module.css"
import VariantCard from './VariantCard'
import data from "./../../Json/Variant.json"

export default function VariantContainer() {
  return (
    <div className={Style.wrapper}>
        <div className={`${Style.title} ${Style.title_fs}`}>Select Your Experience</div>
        <div className={`${Style.desc} ${Style.medium_fs}`}>Choose from multiple tickets, tours and combo options by verified operators</div>
        <div className={Style.cardContainer}>
            <div className={Style.card}>
                <VariantCard data = {data}/>
            </div>
            <div className={Style.card}>
                <VariantCard data = {data}/>
            </div>
        </div>
    </div>
  )
}
