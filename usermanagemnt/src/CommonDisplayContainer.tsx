import React, { useState } from "react";
import DisplayRecords from './DisplayRecords';
import { Link } from "react-router-dom";
import AddUser from "./AdduserButton";


const CommonDisplayContainer: React.FC<IProps> = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div >
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems:"center" }}>
                <div className="search" style={{ background: "none" }}>
                    <div className="searchInputs" >
                        <input type="text" placeholder='Search.....' onChange={(e) => { setSearchTerm(e.target.value); }} />
                    </div>
                </div>
                
                <Link to="/addUserform">
                    <button className="button button3">Add User</button>
                </Link>
            </div>

            <DisplayRecords data={props.userData} setUsersData={props.setUsersData}/>
        </div>
    )
}

export default CommonDisplayContainer;

interface IProps {
    userData: IUser[];
    setUsersData: React.Dispatch<React.SetStateAction<IUser[]>>;
}

interface IUser {
    id: number,
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    designation: string;
    phone_no: string;
    city: string;
    department: string;
    date_of_birth: string;
    language: string;

}