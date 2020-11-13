import React, { Component } from 'react'

class App extends Component{
    async postData() {
        try{

            let result = await fetch('https://healthinic.herokuapp.com/itching/cough',{
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    key1: 'myusername'
                })

            });

            console.log('Result: ' + result)

        } catch(e){
            console.log(e)
        }
    }
}

render(){
    return(
        <div className= "App">
            <button onClick={ () => thisreturn.postData()} >Press to post data</button>
        </div>    
    );
}

export default App;
