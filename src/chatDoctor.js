
import React from "react"

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import fire from './config/firebase'
import firebase from "firebase"





class ChatDoctor extends React.Component {
    
    
    constructor() {
      super();
      this.state = {
        messages: [],
        user: {},
        isAuthenticated: false,
      }
    }
  
async signIn() {
    var googleProvider =new firebase.auth.GoogleAuthProvider();
    try {
      await fire.auth().signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

    componentDidMount(){
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ isAuthenticated: true, user });
          } else {
            this.setState({ isAuthenticated: false, user: {}, messages: [] });
          }
        });
      }

      


      renderPopup() {
        return (
          <Dialog open={!this.state.isAuthenticated}>
            <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
            <div>
              <List>
                <ListItem button onClick={() => this.signIn()}>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "#eee" }}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        height="30"
                        alt="G"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Sign in with Google" />
                </ListItem>
              </List>
            </div>
          </Dialog>
        );
      }

      signOut() {
        fire.auth().signOut();
      }
      
      renderSignOutButton() {
        if (this.state.isAuthenticated) {
          return <Button onClick={() => this.signOut()}>Sign out</Button>;
        }
        return null;
      }


      render() {
        return (
          <div className="App">
            {this.renderPopup()}
            {this.renderSignOutButton()}
          </div>
        );
      }
    


} //class ChatDoctor closes here


  

 
  export default ChatDoctor;

  