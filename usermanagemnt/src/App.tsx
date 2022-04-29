import './App.css';
import './Navbar.css';
import Nav from './Navbar-user';
//import SearchBar from './Search-user';
//import AddUser from './AdduserButton';
import AdduserForm from './addUserform';

import './search.css';
import './addUser.css';
//import DisplayRecords from './DisplayRecords';
import './DisplayRecords.css';
import CommonDisplayContainer from './CommonDisplayContainer';
import records from './records.json'
import ViewDetails from './Details';

import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    if (!usersData.length) {
      setUsersData(records);
      
    }
  }, [records]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CommonDisplayContainer userData={usersData} setUsersData={setUsersData} />} />
        <Route path="/addUserform" element={<AdduserForm />} />
        <Route path="/Details/:id" element={<ViewDetails userData={usersData} />} />
      </Routes>
    </Router>
  );
}

export default App;

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
