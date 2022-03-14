import React from 'react'
import HighLightContent from './Product/HighLightContent'
import ProductBanner from './Product/ProductBanner'
import VariantContainer from './Product/VariantContainer'
import Style from "./../modules/Body/Body.module.css"
import Safety from './Product/Safety'

export default function Product() {
  return (
    <div className={Style.wrapper}>
        <ProductBanner />
        <HighLightContent/> 
        <Safety/>
        <VariantContainer />
    </div>
  )
}
