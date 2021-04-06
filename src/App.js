import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';


function App() {
  const [cname,setCname]=useState('Talha');

  return (
    <div className="app">
  

    <div className="app_body">

    <Sidebar setCname={setCname} />

     <Chat cname={cname} />

    </div>
    </div>
  );
}

export default App;
