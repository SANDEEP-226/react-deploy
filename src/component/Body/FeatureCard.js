import React from 'react'
import Style from "./../../modules/Body/FeatureCard.module.css"
import ReactMarkdown from "react-markdown"
// import img from "../../assets/Ban4.jpeg"
import axios from 'axios'


export default function FeatureCard({ id }) {


  const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Image][populate]=*"
    const [post, setPost] = React.useState(null);
    // console.log("Two",id);
    // const { data , error } = useFetch(baseURL);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        // console.log("FC");
        // console.log(JSON.stringify(response.data.data.attributes.Content[id]));
        // console.log(JSON.stringify(response.data.data.attributes.Content[id].Variant));
        setPost(response.data.data.attributes.Content[id]);
        // console.log(Object.keys(response.data.data.attributes));
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
    // console.log(post.Image.data.attributes.url);
    // console.log("------");


    const img  = "http://localhost:1337"+post.Image.data.attributes.url;



  return (
    <div className={Style.wrapper}>
        <div className={Style.rowTitle}><h2>Overview of Weather in Dubai in May</h2></div>
        <div className={Style.container}>
            <div className={Style.imageContainer}>
                <img src={img} />
            </div>
            <div className={Style.contentContainer}>
                <ReactMarkdown>{post.Content}</ReactMarkdown>
                {/* With the lengthening days and rising temperature, Dubai grows hotter in May as it experiences summer. Days are as long as 13 hours with about 11 hours of sunshine.
                <br></br>
                <br></br>
                <b>Average Temperature:</b> High- 37°C | Low- 23°C
                <br></br>
                <b>Average Rainfall:</b> 2.54 mm
                <br></br>
                <b>Daily Wind Speed:</b> 0.2 mph. Mild winds from the West.
                <br></br>

                <b>Temperature of the Sea:</b> 26°C to 30°C
             */}
            </div>
        </div>
    </div>
  )
}
