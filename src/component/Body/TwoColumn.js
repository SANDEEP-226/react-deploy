import React, { useState } from 'react'
import axios from "axios"
import root from "../../modules/responsive.module.css"
import Style from "./../../modules/Body/Column.module.css"
import Card from  "./Card"
import ReactMarkdown from "react-markdown"
import  useFetch  from "./../hooks/useFetch"

const dataLess = "<h1><i>hello</i><br/><b>world<b></h1>"

export default function TwoColumn({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Cards][populate]=*"
       React.useEffect(() => {
      axios.get(baseURL).then((response) => {

        setPost(response.data.data.attributes.Content[id]);
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    const [ post, setPost ] = useState(null);
    if(!post) return null;
    return (
        <div className={
            post.Grey_Background == true ? Style.Grey_BackgroundBox : Style.White_BackgroundBox
          }>
            <div className={`${Style.row} ${root.md_col_11} ${root.sm_col_10} ${root.tb_col_10} ${root.col_10}  ${root.l_col_11}`}>
                <ReactMarkdown>{post.Heading}</ReactMarkdown>
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
        </div>
  )
  }



  export  function TwoColumnContent( { data } ){
      const [state, setstate] = useState(false);
    console.log(data);
    return(
       
        <div className={Style.TwoColumnContentContainer}>
            <ReactMarkdown>{state ? data : data.substring(0,500)}</ReactMarkdown>
            <p onClick={() => setstate(!state)} className= { Style.readMore }>{data.length < 200 ? null: state ? "Read Less" :"Read More"}</p>
        </div>
    )
  }



  // console.log("Two",id);

    // React.useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     // console.log(JSON.stringify(response.data.data.attributes.Content[id]));
    // // console.log("Two");

    //     // console.log(JSON.stringify(response.data.data.attributes.Content[id].Variant));
    //     setPost(response.data.data.attributes.Content[id]);
    //     // console.log(Object.keys(response.data.data.attributes));
    //   }).catch((error ) => {
    //     console.log(error);
    //   }) ;
    // }, []);
  


//UseQuery
    // const {  loading , error , data } = useFetch(baseURL);

    // if (loading ) return <div>loading..</div>;
    // if(error) return <div> error </div>
    // setPost(data.data.attributes.Content[id]);
    // console.log(data.data.attributes.Content[id]);