import React from 'react'
import Style from "./../../modules/Body/FeatureTemplate.module.css"
import img from "../../assets/Ban4.jpeg"
import data from "../../Json/Feature.json"


export default function FeatureTemplate({id}) {
    const datax = data.Feature[id];
    console.log(datax);
  return (
    <div className={Style.wrapper}>
        <div className={Style.container}>
            <div className={Style.imageContainer}>
                <img src={img} />
            </div>
            <div className={Style.contentContainer}>
                <div>
                <h2>{datax.FeatureTitle != "" ? datax.FeatureTitle:""}</h2>
                <p>{datax.Description != "" ? datax.Description:""}</p>
                </div>
                <div>
                <ul>
                    {
                        datax.content.map((element,key)  => {
                            return(
                                <div key={key} className={Style.contentContent}>
                               { console.log(element)}
                                <li >{element}</li>
                            </div>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
