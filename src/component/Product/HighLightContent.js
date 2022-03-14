import React from 'react'
import Style from "./../../modules/Product/HighLightContent.module.css"
import  img1 from "./../../assets/Product/Hightlight1.jpeg"
import  img2 from "./../../assets/Product/Hightlight2.jpeg"
import  img3 from "./../../assets/Product/Hightlight3.jpeg"
import  img4 from "./../../assets/Product/Hightlight4.jpeg"
import  img5 from "./../../assets/Product/Hightlight5.jpeg"

export default function HighLightContent() {
  return (
    <div className={Style.wrapper}>
        <div className={Style.content}>
            <div>
                <img src = {img1} />
            </div>
            <div className={Style.contentWrapper}>
                <div className={Style.contextContent}>
                5 Million+
                </div>
                <div className={Style.descriptionContent}>
                Customers Served
                </div>
            </div>
        </div>
        <div className={Style.content}>
            <div>
                <img src = {img2} />
            </div>
            <div>
                <div className={Style.contextContent}>
                Book On the Go
                </div>
                <div className={Style.descriptionContent}>
                Mobile Ticket Redemption
                </div>
            </div>
        </div>
        <div className={Style.content}>
            <div>
                <img src = {img3} />
            </div>
            <div>
                <div className={Style.contextContent}>
                Top Rated Tours
                </div>
                <div className={Style.descriptionContent}>
                World Class Service
                </div>
            </div>
        </div>
        <div className={Style.content}>
            <div>
                <img src = {img4} />
            </div>
            <div>
                <div className={Style.contextContent}>
                Exclusive Discounts
                </div>
                <div className={Style.descriptionContent}>
                Book Online & Save Big
                </div>
            </div>
        </div>
        <div className={Style.content}>
            <div>
                <img src = {img5} />
            </div>
            <div>
                <div className={Style.contextContent}>
                24/7 Support
                </div>
                <div className={Style.descriptionContent}>
                Phone, Email or Chat
                </div>
            </div>
        </div>
    </div>
  )
}
