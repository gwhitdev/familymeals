import React, { useEffect, useState } from 'react';
import Input from './Input';
import List from './List';

const App = () => {
const [meals, setMeals] = useState([]);
console.log(meals);
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
