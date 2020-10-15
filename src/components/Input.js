import React, { useState } from 'react';


const Input = ({onFormSubmit}) => {

    const [meal, setMeal] = useState(['meal1']);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(meal);
        onFormSubmit(meals => [...meals, meal]);
    
    };

    return (
        <div className="ui segment">
            <h2>Input</h2>
            <div className="ui form" >
                <form id="inputForm"className="form"onSubmit={onSubmit}>
                    <div className="field">
                        <input type="text"  onChange={(event) => setMeal(event.target.value)}/>
                    </div>
                    
                        <button onSubmit={onSubmit}className="ui button" type="submit">Add meal</button>
                    
                    
                </form>
            </div>
            
        </div>
    )
}

export default Input;
