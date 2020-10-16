import React from 'react';

const List = ({ meals }) => {
    console.log(meals);
    const renderedMeals = meals.map((meal) => {
        return (
            <div key={meal.name}>
                
                {meal.name}
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

