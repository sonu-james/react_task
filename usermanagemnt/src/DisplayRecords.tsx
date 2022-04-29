import React, { useCallback, useState } from "react";
//import Records from './records.json';
import { Link } from "react-router-dom";

const DisplayRecords: React.FC<IProps> = (props) => {
    console.log("xx", props.data);

    const [visible, setVisible] = useState(3);


    const showMoreItems = () => {

        setVisible((preValue) => preValue + 3);
    };

    const deleteUser = useCallback((id: number) => {
        props.setUsersData(props.data?.filter((record) => record.id !== id));
    }, [ props.setUsersData,props.data])


    return (
        <div className="flex-container">
            {props.data?.slice(0, visible).map(record => {
                return (
                    <div key={record.id}><img src="person1.png" width="130px" height="130px"></img>
                        <strong> <h2>{record.first_name}</h2></strong>
                        {record.last_name}<br></br>
                        {record.email}<br></br>
                        {/* {record.gender}<br></br>
                        {record.designation}<br></br>
                        {record.phone_no}<br></br>
                        {record.city}<br></br>
                        {record.department}<br></br>
                        {record.date_of_birth}<br></br>
                        {record.language}<br></br> */}

                        <div className="myButton">
                            <button className="show button1" onClick={() => deleteUser(record.id)}>Delete</button>
                            <Link to={`/Details/${record.id}`} className ="show button1">Details
                                {/* <button className="sh button1">Show Details</button> */}
                            </Link>
                        </div>
                    </div>

                );
            })}
            <div><button className=" LoadMore button2" onClick={showMoreItems}>Load more</button></div>
        </div>

    );
}
export default DisplayRecords;

interface IProps {
    data: IUser[];
    setUsersData: React.Dispatch<React.SetStateAction<IUser[]>>;
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