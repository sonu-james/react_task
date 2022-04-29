import React from 'react'

const TaskBirthday = () => {
  return (

    <div>
    <h1>Birthday Picker</h1>
        <form >
        <textarea  name="usrtxt" wrap="hard">

        </textarea>
        <label htmlFor='Lastname'>Enter Year</label>
        <input type="text"  name="year"  placeholder='Enter the Year'/>
        <input type="Submit" name="submit"/>
        </form>
    </div>
  )
}

export default TaskBirthday