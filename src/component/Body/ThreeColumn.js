import React from 'react'
import axios from "axios"
import ReactMarkdown from "react-markdown"
import Style from "./../../modules/Body/Column.module.css"
import root from "../../modules/responsive.module.css"
import Card from "./Card"

export default function ThreeColumn({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Cards][populate]=*"
    const [post, setPost] = React.useState(null);
    // console.log("Two",id);

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
        <div className={Style.rowTitle}><h2>Best Things to do in Dubai in May</h2></div>
        {/* <div className={Style.rowDesc}></div> */}
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
  )
}

export function ThreeColumnContent({ data }){
    return(
        <div className={Style.ThreeColumnContentContainer}>
            <ReactMarkdown>{data}</ReactMarkdown>
            {/* <div className={Style.ThreeTitle}>
                <h3>Why You Should Visit </h3>
            </div>
            <div className={Style.ThreeDesc}>
                <h5>City LandMark </h5>
            </div>
            <div className={Style.info}>
                Dubai is well-known for its adventure sports options. One such activity is jet-skiing, which offers a refreshing way to see this city’s landmarks while cooling off in the pleasant waters of the Arabian Gulf. After completing the 1-2 day training course, you’ll be able to jet ski across the waters of Jumeirah Beach and snap pictures in front of Dubai’s glittering skyscrapers. This is certainly the perfect activity for when you visit Dubai in May.
                <br/>
                <br/>
                <b>May Timings:</b> 7 AM to 7 PM
                <br/><br/>
            </div> */}
        </div>
    )
}