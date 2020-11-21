import React, { Component } from 'react'
import fire from './config/firebase'
import './Signup.css'
import {usernametxt} from "./SignUpBoth1"

var userrr=""
var name=""



class Signupsuccess extends Component {

    constructor(props){userrr=fire.auth().currentUser;
        if(userrr!=null)
{name=userrr.email;
localStorage.setItem("email",name)}
        super(props)
        this.state={
            username:"",
            userss:null
        }
    }

    componentDidMount(){const database=fire.database()
        const refRoot=database.ref("users");
        refRoot.orderByChild("email_save").on('value',snapshot=>{
            /*const users=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                users.push(data)
            })
            this.setState({userss:users})*/

       //console.log(snapshot.val().[{usernametxt}].["email_save"])
            
        })

    }

    /*componentDidMount(){const database=fire.database();
        const rootRef= database.ref("users")
        const rootRef1=database.ref("doctors")
        
        rootRef.orderByChild("email_save").equalTo({usernametxt}).on

    }*/

    logout(){
        fire.auth().signOut();
    }

    

    render()
    {
    return(
        <div>
            <h1>You are logged in! </h1>
            <button onClick={this.logout}>Logout</button>
            {
                this.state.userss && 
                this.state.userss.map(user=>{
                    return(
                        <div>
                            <p>{user.email_save}</p>
                            </div>
                    )
                })
            }
        </div>

        );}
}

export default Signupsuccess
export {name}
