import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
    return ( <div className = "app">
        {/* <h1> Ye </h1>  */}
        {/*Sidebar*/}
        <Sidebar />
        {/* Feed */}
        <Feed />

        <Widgets/>


        </div>
    );
}

export default App;