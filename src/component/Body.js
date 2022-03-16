import React , { useState , useEffect } from 'react'
import axios from 'axios'
import TwoColumn from "./Body/TwoColumn"
import ThreeColumn from "./Body/ThreeColumn"
import FourColumn from "./Body/FourColumn"
import Style from "./../modules/Body/Body.module.css"
import FeatureCard from "./Body/FeatureCard"
import Highlighter from './Body/Highlighter'
import FAQs from './Body/FAQs'
import QuickLinks from './Body/QuickLinks'

function getColumn(size , key) {
  // console.log(key);
  switch (size) {
    case "Large":
      return <TwoColumn id={key} />
    case "Medium":
      return <ThreeColumn id={key} />
    case "Small":
      return <FourColumn id={key} />
    default:
      return "";
  }
}

function getComponent(name,variant,key) {
  switch (name) {
    case "basic-card-component":
      return (
        getColumn(variant , key)
      );
    case "half-half":
      return <FeatureCard id = {key} />

    case "qn-a":
      return <FAQs id= { key } />
    
    case "quick-links":
      return <QuickLinks id = { key }/>
  
    default:  
      return "NULL";
  }
}


export default function Body() {
  const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate=*";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(JSON.stringify(response.data.data.attributes.Content[1].__component.substring(9)));
      // console.log(JSON.stringify(response.data.data.attributes.Content[1].Variant));
      setPost(response.data.data.attributes.Content);
      // console.log(Object.keys(response.data.data.attributes));
    }).catch((error ) => {
      console.log(error);
    }) ;
  }, []);

  if (!post){
    // console.log("djhgk");
    return null;
  } 
  return (
    
    <div className={Style.wrapper}>
      {
        post.map( ( value , key ) => {
          // console.log(value.__component.substring(9));
          return(
          <div key={key}  className={Style.wrapper} >
          {
          getComponent(value.__component.substring(9),value.Variant,key)
          }
          </div>
            
          );
        })
      }
        
    </div>
  )
}

{/* <TwoColumn/>
        <ThreeColumn/>
        <FourColumn/>
        <br/>
        <br/>
        <br/>
        <FeatureCard/>
        <br/>
        <br/>
        <Highlighter/>
        <br/>
        <FAQs/>
        <QuickLinks/> */}