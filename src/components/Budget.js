import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    
    const { dispatch, remaining } = useContext(AppContext);
    

        const handleInChange = (event) => {
            
            if (event.target.value > budget){
                dispatch({
                    type: 'ADD_BUDGET',
                });
            }
            else{
                if (remaining > 9){
                    dispatch({
                        type: 'Red_BUDGET',
                    });
                }
                else{
                    alert("You cannot reduce the budget value lower than the spending");
                }
                
            }
          
        };
    
    
        


    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>

            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step={10}
                max={20000}
                onChange={handleInChange}>
            </input>
        </div>
    );
};
export default Budget;