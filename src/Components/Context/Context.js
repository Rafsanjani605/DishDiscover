import axios from "axios";
import React, { createContext, useCallback, useState } from "react";

export const mycontext =createContext();

export const AppContexxt = ({children}) =>{

    const [meals , setmeals] = useState([])
    const [categories, setCategories] = useState([])
    const [ randommeal , setrandommeal] = useState([])

    const fetchhomemeals = useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res =>{
            console.log(res.data)
            setmeals(res.data.meals);
        })
      }, []);


  
      
    
    return <mycontext.Provider value={{fetchhomemeals , meals}}>{children}</mycontext.Provider>


}
