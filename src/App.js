import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Drinks from './Drinks';

function App() {

  const [cocktail,setcocktail] = useState([]);    // Getting Api data
  const [input,setinput] = useState('');          //  Setting input from user
  const [selectDrinks,setselectDrinks] = useState("all");   //setting select and set all as default 
  const [FilterDrinks,setFilterDrinks] = useState([]);      // Getting filtered elements 

  useEffect(()=>{
    
    async function fetchData(){
      const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
      setcocktail(request.data.drinks);        
      return request;
    }

    fetchData();
  },[input]);

  

  // **********  Get unique drinks value  *****************
   
      const unique = cocktail?.map(item => item.strCategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    

  //  ***************  Filter handler  ****************** 
    const filter = (e) =>{
      setselectDrinks(e.target.value);
      
      const Filter_Drinks= cocktail.filter(x => x.strCategory === selectDrinks);
      setFilterDrinks(Filter_Drinks);
  }


    

  return (
    <div className="app">

      <div className="app-container">
         
         <div className="input-container">

           {/* ********** Search box  ************* */}
            <input className="input" type="text" value={input} onChange={(e)=>setinput(e.target.value)} />  
 
              
           {/* ********** filter box  ************* */}
            <select value={selectDrinks} onChange={filter}>
              <option value="all">All</option>

              {unique?.map((unique_drinks,index) =>{
                  return <option  className="option" key={index} value={unique_drinks}>{unique_drinks}</option>
              })}
            </select>

         </div>


           {/* **********  Drinks Com[onent  ***********] */}

          {selectDrinks === "all" ?

           (cocktail? 
              (<div className="drink-container">
                  {cocktail.map((cock) =>{
                      return <Drinks key={cock.idDrink} drink={cock} /> 
                  })}
              </div>) :

               <h1 className="result">No Result Found!!!!</h1>
           ) :
                
           ( FilterDrinks? 
              <div className="drink-container">
                {FilterDrinks.map(filter =>{
                  return <Drinks key={filter.idDrink} drink={filter} />  
                })}
             </div>  :

              <h1 className="result">No Result Found!!!!</h1>
           )
          }

         
      </div>

    </div>
  );
}

export default App;

