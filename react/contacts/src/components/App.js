import React,{useState,useEffect} from "react";
import uuid from "uuidv4";
import './App.css';
import Header from "./header";
import Addcontact from "./addcontact";
import ContactList from "./contactlist";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts,{id:uuid(), ...contacts}])
  }

  const removeContactHandler = ((id)=>{
    const newcontactlist = contacts.filter((contact)=>{
      return contact.id != id
    })

    setContacts(newcontactlist)
  })

  const deleteContact = 

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
        <Header/>
        <Addcontact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContact={removeContactHandler}/>
      </div>
  );
}

export default App;
