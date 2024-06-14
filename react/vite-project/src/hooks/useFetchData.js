import { useEffect, useState } from "react";

export const useFetchData = () => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    try{
      const response = await fetch('http://localhost/backend-interactivas-II/vinx-app/public/api/events/all');
      const data = await response.json();
      setData(data);
      setIsLoading(false)
    }catch(error){
      console.log(error);
    }
    
  }



  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading,
  }
}