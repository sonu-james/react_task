import './App.css';
import './Navbar.css';
import Nav from './Navbar-user';
//import SearchBar from './Search-user';
//import AddUser from './AdduserButton';
import AdduserForm from './addUserform';
import './search.css';
import './addUser.css';
//import SearchUserContainer from './SearchUserContainer';
//import DisplayRecords from './DisplayRecords';
import './DisplayRecords.css';
import CommonDisplayContainer from './CommonDisplayContainer';

import {
  BrowserRouter as Router,
  Routes,Route,
}from 'react-router-dom';



function App() {
  return (
    <Router>
    <Nav/>
        
    <Routes> 

     <Route path ="/" element={<CommonDisplayContainer/>}/>
     <Route path ="/addUserform" element={<AdduserForm/>}/>
     
    </Routes>
    </Router>

  );
}

export default App;
