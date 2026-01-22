import react from "react";
import user from "../images/default_pfp.jpg";

const ContactCard = (props)=>{
    const {id,name,age} = props.contact
    return(
        <div className='item'>
                <img className="ui avatar image" src={user} alt="user"></img>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='header'>{age}</div>
                </div>
                    <i className='trash alternate outline icon' style={{color:"red",marginTop:"6px",float:"right"}} onClick={props.clickhandler(id)}></i>
        </div>
    );
}

export default ContactCard