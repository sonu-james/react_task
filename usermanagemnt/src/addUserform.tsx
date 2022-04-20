import React,{useState} from 'react';
 function AdduserForm ()  {

    const [userRegistration,setuserRegistration]=useState({
        username: "",
    });

     function handleInput(e:any){

     }
    return(
        <div>
           <form action="">
               <label htmlFor='username'>Username</label>
               <input type="text" autoComplete='off' value={userRegistration.username} onChange={handleInput}
                name="username" id="username"/>
               <button type="submit">ADD</button>
           </form>
        </div>
    )

}
export default AdduserForm;