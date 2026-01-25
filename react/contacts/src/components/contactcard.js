import React from "react";
import {Link} from "react-router-dom";
import user from "../images/default_pfp.jpg";

const ContactCard = (props)=>{
    const {id,name,age} = props.contact
    return(
        <div className='item'>
                <img className="ui avatar image" src={user} alt="user"></img>
                <Link to={`/contact/${id}`}>
                     <div className='content'>
                        <div className='header'>{name}</div>
                        <div className='header'>{age}</div>
                    </div>
                </Link>
                    <i className='trash alternate outline icon' style={{color:"red",marginTop:"6px",float:"right"}} onClick={()=>{
                        props.clickhandler(id)
                    }}></i>
        </div>
    );
}

export default ContactCard