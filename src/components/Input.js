import React, { useState } from 'react';


const Input = ({onFormSubmit}) => {

    const [meal, setMeal] = useState({
        name: '',
        mainIngredient: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(meal.name, meal.mainIngredient);
        console.log(meal);
    };

    const submitMeal = e => {
        e.preventDefault();
        setMeal({
            ...meal,
            [e.target.name]: e.target.value
        });
    onFormSubmit((meal) => meal);
    
    };

    return (
        <div className="ui segment">
            <h2>Input</h2>
            <div className="ui form" >
                <form id="inputForm"className="form"onSubmit={printValues}>
                    <div className="field">
                        <input 
                            type="text"  
                            name="name"
                            value={meal.mealname}
                            onChange={submitMeal}
                            />
                    </div>
                    <div className="field">
                        <input 
                            type="text"  
                            name="mainIngredient"
                            value={meal.mainIngredient}
                            onChange={submitMeal}
                            />
                    </div>
                    
                        <button onSubmit={submitMeal}className="ui button" type="submit">Add meal</button>
                    
                    
                </form>
            </div>
            
        </div>
    )
}

export default Input;
