import React, { useState } from 'react'
import axios from "axios"
import ReactMarkdown from "react-markdown"
import Style from "./../../modules/Body/Column.module.css"
import root from "../../modules/responsive.module.css"
import Card from "./Card"

export default function ThreeColumn({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Cards][populate]=*"
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.data.attributes.Content[id]);
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
  return (
      <div className={
        post.Grey_Background == true ? Style.Grey_BackgroundBox : Style.White_BackgroundBox
      }>
            <div className={`${Style.row} ${root.md_col_11} ${root.sm_col_10} ${root.tb_col_10} ${root.col_10}  ${root.l_col_11}`}>
              <div className={Style.rowTitle}><h2>Best Things to do in Dubai in May</h2></div>
              <div className={Style.columnContainer}>
                  {
                      post.Cards.map((value , key) => {
                          return (
                              <div className={Style.ThreeColumn} key= { key }>
                                  <Card type="threeColumn" value = { value } />
                              </div>
                          )
                      })
                  }
                  
                
              </div>
          </div>
      </div>
    
  )
}

export function ThreeColumnContent({ data }){
  const [state, setstate] = useState(false);

    return(
        <div className={Style.ThreeColumnContentContainer}>
            <ReactMarkdown>{state ? data : data.substring(0,200)}</ReactMarkdown>
            <p onClick={() => setstate(!state)}>{data.length < 200 ? null:"Read More"}</p>
        </div>
    )
}