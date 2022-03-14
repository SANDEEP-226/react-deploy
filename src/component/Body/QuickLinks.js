import React from 'react'
import Style from "./../../modules/Body/QuickLinks.module.css"
import data from "./../../Json/QuickLinks.json"
import axios from 'axios'

export default function QuickLinks({id}) {
    const baseURL = "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][One_Category][populate]=*"
    const [post, setPost] = React.useState(null);
    // console.log("Two",id);
    // const { data , error } = useFetch(baseURL);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        // console.log("Ql");
        // console.log(JSON.stringify(response.data.data.attributes.Content[id]));
        setPost(response.data.data.attributes.Content[id]);
        // console.log(Object.keys(response.data.data.attributes));
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
    // console.log(post.One_Category);
    // console.log("------");
  return (
    <div className={Style.wrapper}>
        <div className={Style.header}>Quick Link</div>
        <div className={Style.container}>
            {
                post.One_Category.map((value , key ) => {
                    return(
                        <div className={Style.content}>
                            <div className={Style.subHeader}>{value.Category_Name}</div>
                            <ul>
                            {
                                value.Links.map((val , key) => {
                                    return(
                                            <li>{val.Link_Name}</li>
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
  )
}
