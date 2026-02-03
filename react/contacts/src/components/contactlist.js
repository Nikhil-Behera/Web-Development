import React,{useRef} from 'react';
import {Link} from "react-router-dom";
import ContactCard from './contactcard';

const ContactList = (props)=>{
    const inpele = useRef('')

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard  key={contact.id} contact={contact} clickhandler={props.getContact}/>
        );
    })

    const deleteContactHandler = (id)=>{
        props.getContact(id)
    }

    const getsearchterm = ()=>{

    }

    return(
        <>
            <div className='ui clearing segment'>
            <h2 className='ui left floated header'>
                Contact List
            </h2>

            <div className='ui search'>
                <div className='ui icon input'>
                    <i className='search icon'></i>
                    <input type='text' placeholder='Search' className='prompt' value={props.term} onChange={getsearchterm}></input>
                </div>
            </div>

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