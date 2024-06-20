import { id } from "date-fns/locale";
import { useEffect, useState } from "react";

export const useFetchData = () => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    
    const response = await fetch('http://localhost/backend-interactivas-II/vinx-app/public/api/user/toke', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    console.log(data.user_id);
     const id = data.user_id;
    try{
      
      const response = await fetch(`http://localhost/backend-interactivas-II/vinx-app/public/api/courses/${id}`);
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