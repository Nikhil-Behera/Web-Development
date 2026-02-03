import React,{useState,useEffect} from "react";
import api from "../api/contacts"
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
  const [searchterm,setsearchterm] = useState([])

  // Get all contacts from Get retrieveContacts
  const retrieveContacts = async ()=>{
    const response = await api.get("http://localhost:3006/contacts")
    return response.data
  }

  const addContactHandler = async (contact)=>{
    console.log(contact)
    const request = {
      id:uuidv4(),
      ...contact
    }
    const response = await api.post("http://localhost:3006/contacts",request)
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id)=>{
    await api.delete(`http://localhost:3006/contacts/${id}`)
    const newcontactlist = contacts.filter((contact)=>{
      return contact.id != id
    })

    setContacts(newcontactlist)
  }

  const searchhandler = ()=>{}

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts]
  )
  useEffect(()=>{
    // const retrieveitem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if(retrieveitem) setContacts(retrieveitem)
    const getAllContacts = async ()=> {
      const getallcontacts = await retrieveContacts()
      if(getallcontacts) setContacts(getallcontacts)
    }
    getAllContacts()
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
                element={<ContactList contacts={contacts} getContact={removeContactHandler} term={searchterm} searchkeyword={searchhandler}/>}
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
