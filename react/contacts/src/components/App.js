import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from "./header";
import Addcontact from "./addcontact";
import ContactList from "./contactlist";
import ContactDetail from "./contactdetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts, { id: uuidv4(), ...contact }])
  }

  const removeContactHandler = ((id)=>{
    const newcontactlist = contacts.filter((contact)=>{
      return contact.id != id
    })

    setContacts(newcontactlist)
  })

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts]
  )
  useEffect(()=>{
    const retrieveitem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveitem) setContacts(retrieveitem)
  },[])

  return (
      <div className="ui container" style={{marginTop:"75px"}}>
        <Router>
            <Header/>
            <Routes>
              <Route 
                path="/add"
                exact 
                element={<Addcontact contact={contacts} addContactHandler={addContactHandler}/>}
              />
              <Route 
                path="/home" 
                exact
                element={<ContactList contacts={contacts} getContact={removeContactHandler}/>}
              />
              <Route
                path="/contact/:id"
                exact
                element={<ContactDetail contacts={contacts}/>}
              />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
