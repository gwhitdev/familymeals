import React, { useEffect, useState } from 'react';
import Input from './Input';
import List from './List';

const App = () => {
const [meals, setMeals] = useState([]);
useEffect(() => {
    console.log(typeof(meals));
})
//console.log(meals);
   /* const meals = [
        {
            label: 'Meal 1',
            /*ingredients: [
                {id: 1, name: 'Ingredient 1'},
                {id: 2, name: 'Ingredient 2'},
                {id: 3, name: 'Ingredient 3'}
            ]
        }
    ];*/

    return (
        <div className="ui container"style={{marginTop: '10px'}}>
            <Input onFormSubmit={setMeals}/>
            <List 
            meals={meals}
            
            />
        </div>
    )
}


export default App;
