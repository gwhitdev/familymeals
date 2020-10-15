import React, { useState } from 'react';


const Input = ({onFormSubmit}) => {

    const [meal, setMeal] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(meal);
        onFormSubmit(meal);
    };

    return (
        <div className="ui segment">
            <h2>Input</h2>
            <div className="ui form" onSubmit={onSubmit}>
                <form id="inputForm"className="form">
                    <div className="field">
                        <input type="text" value={meal} onChange={(event) => setMeal(event.target.value)}/>
                    </div>
                    
                        <button onSubmit={onSubmit}className="ui button" type="submit">Add meal</button>
                    
                    
                </form>
            </div>
            
        </div>
    )
}

export default Input;
