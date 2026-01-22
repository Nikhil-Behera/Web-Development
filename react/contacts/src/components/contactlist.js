import React from 'react';
import ContactCard from './contactcard';

const ContactList = (props)=>{
    // console.log(props)

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickhandler={deleteContactHandler}/>
        );
    })

    return(
        <div className='ui celled list'>
            <h2>Contact List</h2>
            {renderContactList}
        </div>
    );
}

export default ContactList