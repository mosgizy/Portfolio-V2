import axios from "axios"
import { useState,useEffect } from "react"

const GetData = (url:string) => {
  const [data, setData] = useState({})
  
  const getData = async () => {
		  try {
        const response = await axios.get(url)
		    const data = await response.data;
        setData(data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  };
    
  useEffect(() => {
      getData()
  },[url])

  return {...data}
}

export default GetData