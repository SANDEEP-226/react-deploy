import { render } from '@testing-library/react';
import React ,{ useState } from 'react'
import Style from "./../../modules/Product/VariantContainer.module.css"

function Render(data){
    console.log(data);
    return(
        <div className={Style.Render}>
            <ul>
            {
                data.content.map(( value , key) => {
                    return(
                        <li>{value}</li>
                    )
                })
            }       
            </ul>
        </div>
    )
}


export default function VariantCard({data}) {

    const [state, setstate] = useState(0);
    console.log(data);
  return ( 
    <div className={Style.cardWrapper}>
        <div className={Style.leftContainer}>
            <div className={Style.variantTitle}>Burj Khalifa At the Top Ticket with Coffee</div>
            <div className={Style.safety}>Best Safety</div>
            <div className={Style.contentContainer}>
                <div className={Style.topBar}>
                    <ul>
                        <li onClick={() => setstate(0)}>Highlights</li>
                        <li onClick={() => setstate(1)}>Tips & Information</li>
                        <li onClick={() => setstate(2)}>Cancellation Policy</li>
                    </ul>
                </div>
                {console.log(data[state])}
                {
                    Render(data[state])
                }
            </div>
        </div>
        <div className={Style.rightContainer}>
            <div>

            <div><b>AED 56</b></div>
                <div className={Style.bookNow1}>BOOK NOW</div>
            </div>
            
        </div>
    </div>
  )
}
