import axios from "axios"
import { useState,useLayoutEffect } from "react"
import About from "../resources/interface/sideBar";

const useGetData = (url:string) => {
  const [data, setData] = useState<About>()
  
  const getData = async () => {
		  try {
        const response = await axios.get(url)
		    const data = await response.data;
        setData(data);
        
      } catch (error) {
        console.log(error)
      }
  };
    
  useLayoutEffect(() => {
      getData()
  }, [url])
  
  return data
}

export default useGetData