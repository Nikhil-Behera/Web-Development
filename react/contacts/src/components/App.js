import React,{useState} from "react";
import './App.css';
import Header from "./header";
import Addcontact from "./addcontact";
import ContactList from "./contactlist";

function App() {
  const [contacts,setContacts] = useState([])
  return (
      <div className="ui container" style={{marginTop:"75px"}}>
        <Header/>
        <Addcontact/>
        <ContactList contacts={contacts}/>
      </div>
  );
}

export default App;
