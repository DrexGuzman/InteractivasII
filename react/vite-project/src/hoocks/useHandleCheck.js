import {useState } from 'react';

export const useHandleCheck=()=> {

        const [isChecked, setIsChecked] = useState(false);
      
        const handleCheck = () => {
          setIsChecked(!isChecked);
        };

      return { isChecked, handleCheck}
}