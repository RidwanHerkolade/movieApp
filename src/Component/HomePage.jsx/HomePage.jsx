import React, { useState } from 'react';
import Search from '../Form/Search';
import './HomePage.css'

const HomePage = () => {
    const getDataFromSearch = (getData) => {
        console.log(getData);


        // calling api
        async function getRecipes(){
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apikey=e97e91307feb4068924b19820e4a05b&query=${getData}`);
            const result = await apiResponse.json()
            console.log(result)
        } 
        getRecipes();

    };
     return (
        <div className='home__div'>
            <div className='home__divs'>
                 <div className="hello">HELLO</div>
                 <Search  getDataFromSearch={getDataFromSearch}/>


            </div>
           
        </div>
          
         
     )
}

export default HomePage;