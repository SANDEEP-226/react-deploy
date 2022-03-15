import React from 'react'
import Style from "./../../modules/Body/QuickLinks.module.css"
import data from "./../../Json/QuickLinks.json"
import axios from 'axios'

export default function QuickLinks({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][One_Category][populate]=*"
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
        <div className={Style.wrapper}>
            <div className={Style.header}>{post.Heading}</div>
            <div className={Style.container}>
                {
                    post.One_Category.map((value , key ) => {
                        return(
                            <div className={Style.content} key = { key }>
                                <div className={Style.subHeader}>{value.Category_Name}</div>
                                <ul>
                                {
                                    value.Links.map((val , key) => {
                                        return(
                                                <li key = { key }>{val.Link_Name}</li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
