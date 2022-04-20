import React from 'react';
import Records from './records.json';


 const DisplayRecords = () => {
    return(
        <div className="flex-container">
            {
                Records.map(record => {
                    return(
                     
                        <div> 
                       <strong> {record.first_name}</strong><br></br>
                       {record.last_name}
                       {record.email}
                       {record.gender}
                       {record.designation}
                       {record.phone_no}
                       {record.city}
                       {record.department}
                       {record.date_of_birth}
                       {record.language}

               
                        </div>
                    )   
                })
            }
    </div>
    );
 }
 export default DisplayRecords;