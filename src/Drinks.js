import React from 'react';
import './App.css';

function Drinks({drink}) {

    const{strDrinkThumb,strDrink,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = drink

    return (
       
            <div className="drink">
               <div className="img-container">
                  <img src={strDrinkThumb} alt={strDrink}/>
               </div>

             <h3 className="drink-name">{strDrink}</h3>

             <div className="drink-info">
                 <h3><span>Name</span> : {strDrink}</h3>
                 <h3><span>Info</span> : {strInstructions} </h3>
                 <h3><span>Ingrident</span> : {strIngredient1},     {strIngredient2},
                   {strIngredient3},
                   {strIngredient4},
                   {strIngredient5}
                 </h3>
             </div>
            </div >

    )     

}

export default Drinks
