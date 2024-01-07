//Accordion


import React from 'react';
import {useState} from 'react'; 
const Accordion = () => {
const tiles = [
{name: 'tile 1', description: 'description 1'},
{name: 'tile 2', description: 'description 2'},
{name: 'tile 3', description: 'description 3'}
];

let [expandedItem, setExpandedItem] = useState(0);

    return (
        <div>
		{
            
        tiles.map((tile, index) => (
            <div key={index}>
		 <div >{tile.name}</div>
		 <button onClick={()=>setExpandedItem(index)}> Expand </button>
		 <div  style={{'display': expandedItem == index? '' : 'none', background:'red', height: '100px', width:'150px'}} >
            {tile.description}</div>
            </div>
        ))
       
        }
     </div>
    );
}

export default Accordion;