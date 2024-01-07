
///print users


import React from 'react'
import {useState, useEffect} from 'react'





const PrintUsers = () => {


	const [userList, setUserList] = useState(null); 
    useEffect(()=> {

         const fetchres = async() => {
         let fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
         const json = await fetchData.json();
         setUserList(json);
         }
         fetchres();
	},[]);



    return (
        <div>
            {
			userList && userList.map((item, index) =>  (
			
			<p key={index} >`User name- ${item.name}`</p>
			
			))
			}
        </div>
    );
}

export default PrintUsers;
