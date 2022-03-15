import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    
    try {
      const res = await axios.get(url)
      const json = await res.json()

      setData(json);
      console.log(data);
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData();
  }, [url])

  return { loading, error, data }
}

export default useFetch