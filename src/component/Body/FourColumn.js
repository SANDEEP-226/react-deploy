import React from 'react'
import axios from 'axios'
import Style from "./../../modules/Body/Column.module.css"
import root from "../../modules/responsive.module.css"
import data from "./../../Json/ColumnCotent.json"
import Card from './Card'
// import { useFetch } from '../hooks/useFetch'

export default function FourColumn({id}) {
  const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Cards][populate]=*"
    const [post, setPost] = React.useState(null);
    // console.log("Two",id);
    // const { data , error } = useFetch(baseURL);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        // console.log("Three");
        // console.log(JSON.stringify(response.data.data.attributes.Content[id]));
        // console.log(JSON.stringify(response.data.data.attributes.Content[id].Variant));
        setPost(response.data.data.attributes.Content[id]);
        // console.log(Object.keys(response.data.data.attributes));
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
    // console.log(post.Cards);
    // console.log("------");
  return (
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
  )
}




export function FourColumnContent( { data } ){
  return(
      <div className={Style.FourColumnContentContainer}>
          <div>
            <b>{data.title}</b>
          </div>
          <div>
            <b>AED {data.Cost}</b>
          </div>
      </div>
  )
}