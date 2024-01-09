import React, { useState } from 'react';

const TodosApp = ({todosList, handleDelete, date}) => {
    const [check, setCheck] = useState(false);
   


    const handleCheckBox=()=>{
        setCheck(check=> !check)
    }
  return (
    <div>
        <div className='card'>
            {
                todosList.map((todo, index)=>{
                    return(
                        <div className='card'>
                        {todo} <input type='checkbox' onClick={handleCheckBox} value={check}/>
                        {
                            check ? (<span className='text-primary'>task completed</span>) : (<span className='text-danger'>task pending</span>)
                        }
                        <button onClick={()=>handleDelete(index)}>delete</button>
                       
                        </div>
                    )
                })
            }
        </div>
    
    </div>
  )
}

export default TodosApp;