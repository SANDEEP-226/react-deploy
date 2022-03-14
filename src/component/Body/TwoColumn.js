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
    console.log(post.Cards);

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
            <div className={Style.TwoTitle}>
                <h3>Why You Should Visit </h3>
            </div>
            <div className={Style.info}>
                <ul>
                    <li>May marks the beginning of the off-season in Dubai as the peak tourist season begins to die down and the crowds' retreat, leaving the citys popular attractions relatively less packed and open for convenient exploration.</li>
                    <li>This means that you can avail some great deals on even high-end hotels during May since prices usually drop as temperatures begin to rise and the tourists stop pouring into the city around this time of the year. </li>
                    <li>Since Eid al Fitr is set to take place on May 1st this year, it will be a great opportunity to taste the traditional delicacies and experience the charm of Dubais cultural roots.</li>
                    <li>If you plan to spend your time shopping inside the air-conditioned malls, or “wining and dining” in the city’s finest restaurants - this is the best time of year to visit and avoid the heated outdoors.</li>
                </ul>
            </div>
        </div>
    )
  }

