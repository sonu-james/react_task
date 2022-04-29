import React from 'react'
import BdayList from './list'

const TaskBirthday :React.FC<IProps> = (props) => {
  return (

    <div>
    <h1>Birthday Picker</h1>
        <form >
        <textarea  name="usrtxt" wrap="hard">
        </textarea>
        </form>
        <BdayList userData={props.userData} />
    </div>
  )
}

export default TaskBirthday
interface IProps {
    userData: IUser[];
   // setUsersData: React.Dispatch<React.SetStateAction<IUser[]>>;
}
interface IUser {
 
    name: string;
    birthday: string;
  }
  