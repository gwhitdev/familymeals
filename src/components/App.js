import React, { useEffect, useState } from 'react';
//import Input from './Input';
//import List from './List';

const App = () => {
const [meals, setMeals] = useState([{
        name: 'Spaghetti bolgonese',
        
    }])

    function handleKeyDown(e, i){
        if (e.key === 'Enter') {
            createMealAtIndex(e, i);
        }
    }
    function createMealAtIndex(e, i){
        const newMeals = [...meals];
        newMeals.splice(i + 1, 0, {
            name: '',
            
        });
        setMeals(newMeals);
        
    }
    


    return (
        <div className="ui container"style={{marginTop: '10px'}}>
           <input 
                            type="text" 
                            value={meal.name}
                            onKeyDown={e => handleKeyDown(e, i)} 
                            />
        </div>
    )
}


export default App;
