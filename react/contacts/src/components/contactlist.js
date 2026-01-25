import React from 'react';
import {Link} from "react-router-dom";
import ContactCard from './contactcard';

const ContactList = (props)=>{

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard  key={contact.id} contact={contact} clickhandler={props.getContact}/>
        );
    })

    const deleteContactHandler = (id)=>{
        props.getContact(id)
    }

    return(
        <>
            <div className='ui clearing segment'>
            <h2 className='ui left floated header'>
                Contact List
            </h2>

            <Link to={"/add"}>
                <button className='ui button blue right floated'>Add Contact</button>
            </Link>
            </div>
            
            <div className="ui celled list">
                {renderContactList}
            </div>
        </>
    );
}

export default ContactList