import React , { useState } from 'react'
import  Style from "./../../modules/NavBar/DropDown.module.css"

export default function DropDown(param) {
    const [dropdown, setDropdown] = useState(false);
    const data = param.content;
  return (
    <div className={Style.container}>
        <ul>
            {
                data.map((value , key ) => {
                    return(
                        <li> 
                            {value}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
