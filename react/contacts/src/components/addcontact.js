import React from 'react'
class AddContact extends React.Component {
    state = {
        name : "",
        email : ""
    }
    render(){
        return(
            <div className='ui main'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text'  placeholder='Name'/>
                    </div>
                    <div className='field'>
                        <label>Age</label>
                        <input type="number"  placeholder='Age'/>
                    </div>
                    <button className = "ui button blue">Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact
