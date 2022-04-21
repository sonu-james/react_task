import './App.css';
import './Navbar.css';
import Nav from './Navbar-user';
import SearchBar from './Search-user';
import AddUser from './AdduserButton';
import AdduserForm from './addUserform';
import './search.css';
import './addUser.css';
import SearchUserContainer from './SearchUserContainer';
import DisplayRecords from './DisplayRecords';
import './DisplayRecords.css';

import {
  BrowserRouter as Router,
  Routes,Route,
}from 'react-router-dom';



function App() {
  return (
    <div className="main">
      <Nav/>
      <SearchUserContainer/>     
     <AdduserForm />
     <DisplayRecords/> 

  {/*<Router>
    <Routes> 
      <Nav/>
      <Route path ="/" >App</Route>
      <Route path ="/addUserform">AdduserForm</Route>
      
   
    </Routes>
    </Router>*/}





     
    </div>

  );
}

export default App;
