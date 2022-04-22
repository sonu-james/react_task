import React from 'react';
import SearchUserContainer from './SearchUserContainer';
import DisplayRecords from './DisplayRecords';


const CommonDisplayContainer = () => {
    return (
        <div >
            <SearchUserContainer/>
            <DisplayRecords/> 
        </div>
    )
}

export default CommonDisplayContainer

