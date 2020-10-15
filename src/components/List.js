import React from 'react';

const List = ({ meals }) => {
    
    const renderedMeals = meals.map((meal) => {
        return (
            <div key={meal}>
                {meal}
            </div>
        )
    })
    
    //console.log('Meals: ', meals);
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

