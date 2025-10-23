import React, { useEffect, useState } from 'react';
import styles from './search.module.css';
export default function Search({foodData,setFoodData}) {
    const [query, setQuery] = useState("pizza");
    const API_KEY="e5d16996706141e7b4d046c09680d416";
    const URL="https://api.spoonacular.com/recipes/complexSearch";
    useEffect(()=>{
        async function fetchData(){
            console.log(URL);
            const res=await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`,{method:'GET', headers: {
                'Content-Type': 'application/json'
            }});
           
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
    fetchData();
    },[query]);
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" placeholder="Search for food..."  value={query} onChange={(e)=>setQuery(e.target.value)}/>

        </div>
    );
}