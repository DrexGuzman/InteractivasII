import {useState } from 'react';

export const useInput=()=> {
    
      let [isEnabled, setEnabled] = useState(true)
    
      function changeEnabled() {
        setEnabled(true)
      }

      function changeDisabled() {
        setEnabled(false)
      }
    
      return { isEnabled, changeEnabled,changeDisabled }
}