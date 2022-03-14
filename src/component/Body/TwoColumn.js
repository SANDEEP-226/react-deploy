import React from 'react'
import axios from "axios"
import root from "../../modules/responsive.module.css"
import Style from "./../../modules/Body/Column.module.css"
import Card from  "./Card"
import ReactMarkdown from "react-markdown"

const dataLess = "<h1><i>hello</i><br/><b>world<b></h1>"

export default function TwoColumn({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Cards][populate]=*"
    const [post, setPost] = React.useState(null);
    // console.log("Two",id);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        // console.log(JSON.stringify(response.data.data.attributes.Content[id]));
    // console.log("Two");

        // console.log(JSON.stringify(response.data.data.attributes.Content[id].Variant));
        setPost(response.data.data.attributes.Content[id]);
        // console.log(Object.keys(response.data.data.attributes));
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
    // console.log(post.Cards);

    return (
    <div className={`${Style.row} ${root.md_col_11} ${root.sm_col_10} ${root.tb_col_10} ${root.col_10}  ${root.l_col_11}`}>
        {/* {post.Heading} */}
        {/* <div className={Style.rowTitle}><h2>Hello</h2></div>
        <div className={Style.rowDesc}><p>Start off your Arabian exploration by visiting the tallest building in the world.</p></div> */}
        <ReactMarkdown>{post.Heading}</ReactMarkdown>
        {/* <div dangerouslySetInnerHTML={{ __html: dataLess }} /> */}

        <div className={Style.columnContainer}>
            {
                post.Cards.map(( value , key ) => {
                    return(
                        <div className={ `${Style.TwoColumn}` } key={key}>
                            <Card type="twoColumn" value = { value } />
                        </div>
                    ) 
                })
            }
        </div>
    </div>
  )
  }



  export  function TwoColumnContent( { data } ){
    return(
        <div className={Style.TwoColumnContentContainer}>
            <ReactMarkdown>{data}</ReactMarkdown>
        </div>
    )
  }

