
import React from "react";
 const Conditional= () =>{
    let numbers=[1,2,3,4,5,6];
    return(
        <div>
            <ul>
                {numbers.map((n,i)=>(
                   <li key={i}>
                    {n}
                   </li> 
                )
                
                
                )}
            </ul>
        </div>
    )
 }
 export default Conditional