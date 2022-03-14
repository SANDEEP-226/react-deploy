import React from 'react'

export default function useFetch({url}) {
    const baseURL = url;
    const [data, setData] = useState(null);
   


    useEffect(() => {
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