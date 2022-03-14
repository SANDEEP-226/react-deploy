import React from 'react'
import Style from "./../../modules/Product/Safety.module.css"

export default function Safety() {
  return (
    <div className={Style.container}>
        <p className={Style.title}>
        Best Safety Standards
        </p>
        <p className= {Style.desc}> 
        Passengers traveling to Dubai must show either a COVID-19 vaccination certificate with a QR code, a negative PCR test from less than 48 hours ago, or a medical certificate with a QR code proving you have recovered from COVID-19 at least one month before arrival. Wearing masks in outdoor public areas is no longer mandatory. Know more.
        </p>
    </div>
  )
}
