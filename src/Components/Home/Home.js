import React, { useCallback, useContext, useState } from 'react';
import { mycontext } from '../Context/Context';
import './Home.scss'

const Home = () => {

    const [search , setSearch] = useState("");
    const {fetchhomemeals , meals} =  useContext(mycontext);


    //used this for search button

    const fetchmealshandler = useCallback(() =>{

        fetchhomemeals(search)
    }, [search , fetchhomemeals])
    //end



    console.log(search)
    return (
        <div className='home'>

            <div className='home-search '>
                {/* search field */}
               <div >
               <input className='home-input p-3 rounded-md border-indigo-600 shadow-lg shadow-cyan-800 '
                 type="text"
                 placeholder='search'
                  value={search}
                  onChange= {(e) => setSearch(e.target.value)}
                  
                  />
                  
                <button onClick={fetchmealshandler} className='btn btn-primary ml-3
                '>search</button>
               </div>
               {/* search field end */}


            </div>
            <div className='home-meals'>
            {
            meals?
             meals.map(meal => (
                  <div key={meal.idMeal} className='home-mealsgrid'>
                   {/* <img src={meal.strMealThumb} alt="" />
                  <h3>{meal.strMeal}</h3> */}
                  <div className="card w-96 glass">
  <figure><img src={meal.strMealThumb}/></figure>
  <div className="card-body">
    <h2 className="card-title">{meal.strMeal}</h2>
    <p>{meal.strArea}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">recipe</button>
    </div>
  </div>
</div>
        </div>
      ))
    : <p>Meals not found</p>
}

            </div>
            
        </div>
    );
};

export default Home;