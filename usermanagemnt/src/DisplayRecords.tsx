import React,{useState} from "react";

import Records from './records.json';



// const DisplayRecords = () => {
//     const [items,setItems]=useState([]);
//     const [visible,setVisible] =useState(3);


//     useEffect(() =>{
//         fetch( "https://my.api.mockaroo.com/users.json?key=3c7caa60")
//         .then(res) => res.json())
//         .then((data) => console.log(data));

//     }, []);

//     return
//     <div className="flex-container">
//         {
//              items.map(item => (

//              )

            
//         }
//     </div>

// }
// export default DisplayRecords;


 function DisplayRecords() {
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        
        setVisible((preValue) => preValue +3);
};
   
    return (
        
        <div className="flex-container">
            {Records.slice(0, visible).map(record => {
                return (

                    <div><img src="person1.png" width="130px" height="130px"></img>
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


                    </div>
                );
            })}
           <div><button  className =" LoadMore button2" onClick={showMoreItems}>Load more</button></div>
        </div>
        
    );
}
export default DisplayRecords;