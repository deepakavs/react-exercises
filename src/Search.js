//Search.js
import {useState} from 'react';
import {Grid,TextField,Typography} from '@mui/material'
const fruits = ['apple', 'mange', 'grapes', 'berry', 'orange'];


const Search = ()=>{
    const [input,setInput] = useState('');
const handleinput = (e) => {
	setInput(e.target.value);
    return
}
return(
<div>
<Grid container
display='flex'
direction='row'
alignItems='center'
justtifyContent = 'center'>

<Grid item xs={12} md={6}>
		<Typography variant='body'> Search </Typography>
</Grid>

	<Grid item xs={12} md={6}>
		<TextField  variant='outlined' onChange={handleinput}/>
	</Grid>
		
	<Grid item xs={12} md={12}>
		
	{fruits && fruits.filter(fruit => fruit.includes(input)).map( fruit => (
        <Typography>{fruit}</Typography>
    ))  
    }
		
	</Grid>
</Grid>

</div>

);

}

export default Search;