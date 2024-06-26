import { useEffect, useState } from "react";

export const useUpdateProfileImg = (img) => {
    
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
     const id = data.user_id;
    try{
      const response = await fetch('http://localhost/backend-interactivas-II/vinx-app/public/api/user/profile-img');
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
    setData,
  }
}