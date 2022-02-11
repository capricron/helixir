import React, { Component } from "react";
import logo from './../image/logo.png'

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            title : "Helixir",
            about : "Kaos yang memiliki sebuah cerita di balik desainya"
        }
    }

    logo(){
        return <img src={logo} /> 
    }
    
    caption = () => {
        return(
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <p>{this.state.about}</p>
            </React.Fragment>
        )  
    }

    render() {
        return(
            <React.Fragment>
               <div className="header">
                    <this.logo />
                    <this.caption />
               </div> 
            </React.Fragment>
        )
    }
}

export default Header;