import React, {useState} from 'react';
import input from './Input';

const List = ({ meals }) => {
    
    const renderedMeals = meals;
    return (
        <div className="ui segment">
            <h2>List</h2>
            <div>
                {renderedMeals}
            </div>
        </div>
    )
}

export default List;

