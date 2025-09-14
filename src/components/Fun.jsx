
import React from 'react'

export function Fun() {
    const username="Bhanu";
    const age =22 
    function greet(){
        return "Hello"
    }
  return (
    <div>
    <h1>{greet()}{username}</h1>
    <p> your age is {age} year old</p>
    <p>the sum is {10+20}</p>
    </div>
    
  )
}

export default Fun