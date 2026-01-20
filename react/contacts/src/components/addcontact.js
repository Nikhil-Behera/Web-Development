import React from 'react'
class AddContact extends React.Component {
    state = {
        name : "",
        age : ""
    }
    render(){
        return(
            <div className='ui main'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text'  placeholder='Name' value={this.state.name} onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}/>
                    </div>
                    <div className='field'>
                        <label>Age</label>
                        <input type="number"  placeholder='Age' value={this.state.name} onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}/>
                    </div>
                    <button className = "ui button blue">Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact
