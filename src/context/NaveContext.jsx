import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NaveBarContext= createContext();
export const NaveBarColorContext= createContext();

const NaveContext = ({children}) => {
  
   const [navOpen, setNavOpen] =useState(false);
   const [navColor, setNavColor] = useState('white')

   const locate=useLocation().pathname;
   useEffect(function(){
    if(locate == '/projects' || locate == '/agence'){
      setNavColor('black')
    }else{
      setNavColor('white')
    }
   },[locate])
   
   return (
    <div>
        <NaveBarContext.Provider value={[navOpen, setNavOpen]}>
          <NaveBarColorContext.Provider value={[navColor,setNavColor]}>
            {children}
          </NaveBarColorContext.Provider>
        </NaveBarContext.Provider>
    </div>
  )
}

export default NaveContext