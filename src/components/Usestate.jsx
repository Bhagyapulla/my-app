import React, { useReducer } from 'react'

function Usestate() {
    const [state,dispacth]=useReducer(counter,{count:0});
    function counter(state,action){
        switch(action,type){
            case 'increment':
                return {count:state.count + 1}
            case 'decrement':
                return {count:state.count -1};
            case 'reset':
                return {count:0}
        }
    }
  return (
    <div>
        <h1>count:</h1>
        <button onClick={()=>dispacth({type:'increment'})}>Increment</button>
        <button onClick={()=>dispacth({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispacth({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Usestate