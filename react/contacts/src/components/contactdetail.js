import React from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import user from "../images/default_pfp.jpg";

const ContactDetail = ({contacts})=>{

    const {id} = useParams();
    const contact = contacts.find((c)=> c.id === id)
    if(!contact){
        return <h3>Contact not Found.</h3>
    }    

    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="User"/>
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.age}</div>
                </div>
                <div className="center-div">
                    <Link to={"/home"}>
                    <button className="ui button blue center">BACK TO CONTACT LIST</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;