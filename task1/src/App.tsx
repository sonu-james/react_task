import React from 'react';
import { useEffect, useState } from 'react';
import TaskBirthday from './task';
import Details from './details.json';
import BdayList from './list';
import './App.css';

import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';


function App() {

  const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    if (!usersData.length) {
      setUsersData(Details);
      
    }
  }, [Details]);

  return (
    // <div>
    
    // <TaskBirthday/>
    // </div>

    <Router>
      <Routes>
        {/* <Route path="/" element={<TaskBirthday  />} /> */}
        <Route path="list" element={<BdayList userData={usersData} />} />
      
      </Routes>
    </Router>
  );
}
export default App;

interface IUser {
 
  name: string;
  birthday: string;
}
