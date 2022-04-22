import react from 'react';
import {useNavigate} from 'react-router-dom';


function AddUser(){
    let navigate =useNavigate();
    return(
        <div className="addUser">
        <button onClick={() => {
            navigate('/addUserform');
        }} 
        className ="button button3">Add User</button>
        </div>
    )
}
export default AddUser;