import Header from './Compo/Header'
import React from 'react'
import './App.css';
import Sidebar from './Compo/Sidebar';
import Feed from './Compo/Feed';
import Widgets from './Compo/Widgets';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {

  const [{user}, dispatch] =useStateValue();

  return (
    //BEM naming convention
    <div className="App">
      {!user ? (<Login/>) : (<>
        <Header />
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
         {/* 
      sidebar 
      feed 
      widgets 
       */}

      </div>
      </>)}     
      
    </div>
  );
}
export default App;
