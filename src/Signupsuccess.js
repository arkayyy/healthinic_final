import React, { Component } from 'react'
import fire from './config/firebase'
import './Signup.css'


var userrr=""
var name=""



class Signupsuccess extends Component {

    constructor(props){userrr=fire.auth().currentUser;
        if(userrr!=null)
{name=userrr.email;}
        super(props)
        this.state={
            
        }
    }

    logout(){
        fire.auth().signOut();
    }

    

    render()
    {
    return(
        <div>
            <h1>You are logged in as: {name} </h1>
            <button onClick={this.logout}>Logout</button>
        </div>

        );}
}

export default Signupsuccess
export {name}
