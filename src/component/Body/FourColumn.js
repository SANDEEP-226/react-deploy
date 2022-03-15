import React from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Style from "./../../modules/Body/Column.module.css"
import root from "../../modules/responsive.module.css"
import data from "./../../Json/ColumnCotent.json"
import Card from './Card'
export default function FourColumn({id}) {
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
              <div className={Style.rowTitle}><h2>Best Theme Parks in Dubai </h2></div>
              <div className={Style.info}>Dubai is home to some of the biggest and best theme parks worldwide. From daring rides to family-friendly experiences, the city brings a variety of options for you to explore. Here is our list of best theme park attractions in Dubai worth visiting!</div>
              <br/>
              <div className={Style.columnContainer}>
                {
                  post.Cards.map(( value , key ) => {
                    return (
                      <div className={Style.FourColumn} key={key}>
                        <Card type="fourColumn" value = { value }/>
                      </div>
                    )
                  })
                }
                
              </div>
          </div>
      </div>
  )
}




export function FourColumnContent( { data } ){
  return(
      <div className={Style.FourColumnContentContainer}>
          <ReactMarkdown>
            {data}
          </ReactMarkdown>
      </div>
  )
}