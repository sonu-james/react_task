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

function App() {
  return (
    <div className="main">
      <Nav/>
      <SearchUserContainer/>      
      {/* <AdduserForm /> */}
      <DisplayRecords/>
    </div>
  );
}

export default App;
