import React from 'react'
import {Navigate} from "react-router-dom"
class AddContact extends React.Component {
    state = {
        name : "",
        age : ""
    }

    add = (e)=>{
        e.preventDefault();

        if(this.state.name === "" || this.state.age === ""){
            alert("Please enter all the credentials !!")
            return
        }
        // console.log(this.state)

        this.props.addContactHandler(this.state)
        this.setState({name:"",age:"",redirect:true})
        
    }

    render(){

        if(this.state.redirect){
            return <Navigate to={"/home"} />
        }

        return(
            <div className='ui main'>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text'  placeholder='Name' value={this.state.name} onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}/>
                    </div>
                    <div className='field'>
                        <label>Age</label>
                        <input type="number"  placeholder='Age' value={this.state.age} onChange={(e)=>{
                            this.setState({age:e.target.value})
                        }}/>
                    </div>
                    <button type='submit' className='ui button blue'>ADD</button>
                </form>
            </div>
        );
    }
}
export default AddContact
