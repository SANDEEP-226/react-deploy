import React from 'react'

export default function useFetch({url}) {
    const baseURL = url;
    const [data, setData] = React.useState(null);
   

    React.useEffect(() => {
      axios.get(url).then((response) => {
        console.log("Three");
        setData(response.data.data.attributes.Content[id]);
      }).catch((error ) => {
        console.log(error);
      }) ;
    }, []);
  
    if (!post) return null;
  return (
    <div>
        
    </div>
  )
}
// console.log("Two",id);
// console.log(JSON.stringify(response.data.data.attributes.Content[id]));
// console.log(JSON.stringify(response.data.data.attributes.Content[id].Variant));
// console.log(Object.keys(response.data.data.attributes));
// console.log(post.Cards);
// console.log("------");