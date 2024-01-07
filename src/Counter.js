
import {useState} from 'react';
const Counter = () => {


let [count,setCount] = useState(0);

const increaseCount = () => {
setCount(count++);
}

const decreaseCount = ()=> {
setCount(count--);
}

return(

    <div>
        <p>Count: {count}</p>

<button type="button" onClick={increaseCount} id='incCount'>Count +</button> 
<button type="button" onClick={decreaseCount} id='decCount' >Count -</button>

    </div>
);

}

export default Counter;