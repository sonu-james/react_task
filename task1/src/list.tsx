import React,{useState}from 'react'

const BdayList :React.FC<IProps> = (props) =>{
    console.log(props.userData);

    const TodayBday=()=>{
        const currentDay=new Date().getDate();
        const currentMonth =new Date().getMonth();

      const filter=props.userData.filter(data => {
            const day =new Date(data.birthday).getDate();
            const month =new Date(data.birthday).getMonth();
            return currentDay==day && currentMonth ==month;

        })
        return filter;
    }

  return (
     <form action=""> 
     <div>
     <label htmlFor='Year'>Enter Year</label>
     <input type="text"  name="year"  placeholder='Enter the Year'/>
     <button   onClick={TodayBday}> Update</button>
     <div>
        {props.userData?.slice(0,4).map(record =>{
              return(
                  <div>
                      {record.name}<br/>
                      {record.birthday}
                  </div>
              )
        }
        ) 
    }
     </div>
 
     </div>
 </form>
   
  )
}

export default BdayList
interface IProps {
    userData: IUser[];
   // setUsersData: React.Dispatch<React.SetStateAction<IUser[]>>;
}
interface IUser {
 
    name: string;
    birthday: string;
  }
  