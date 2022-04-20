import React from 'react';
import AddUser from './AdduserButton';
import SearchBar from './Search-user';

const SearchUserContainer = () => {
    return (
        <div style={{width:"100%", display: "flex", justifyContent: "space-between"}}>
            <SearchBar />
            <AddUser />
        </div>
    )
}

export default SearchUserContainer