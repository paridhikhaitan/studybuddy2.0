import React from 'react'
import '../scss/App.scss'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <h4>
                    <a href="/">
                    home
                    </a>
                    
                </h4>
                <h4>
                    <a href="/about">
                        about
                    </a>
                </h4>
                <button className="uploadBtn"><a href="/upload">upload</a></button>
            </div>
        );
    }
}

export default Navbar;