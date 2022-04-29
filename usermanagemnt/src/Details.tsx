import React from "react";
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
type Props = {}


const ViewDetails : React.FC<IProps> = (props) =>{
    const{id}=useParams();
    const [listdata,setListData]=useState<IUser>()
    console.log("display",props.userData);
    useEffect(()  =>{
        setListData(props.userData?.find((user)=>user.id === Number(id))) 
    },[props.userData])
    return(

        <div className="flex-container1">
            
          
            <div className="view">  <h1>User Details</h1><img src="person1.png" width="130px" height="130px"/><br/>
            id:{listdata?.id}<br/>
            first_name:{listdata?.first_name} <br/>
            last_name:{listdata?.last_name}<br/>
            email:{listdata?.email}<br/>
            gender:{listdata?.gender}<br/>
            designation:{listdata?.designation}<br/>
            phone_no:{listdata?.phone_no}<br/>
            city:{listdata?.city}<br/>
            department:{listdata?.department}<br/>
            date_of_birth:{listdata?.date_of_birth}<br/>
            language:{listdata?.language}<br/>



             </div>
                   
        </div>
 
    )
}
export default ViewDetails;

interface IProps {
    userData: IUser[];
   // setUsersData: React.Dispatch<React.SetStateAction<IUser[]>>;
}

interface IUser {
    id: number;
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