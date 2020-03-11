import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App'
import BookDisplay from './pages/BookDisplay';
import Upload from './pages/Upload';
import Login from './pages/Login';
import About from './pages/About';

class Main extends React.Component{
    render(){
        return(
            <main id="main">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={App}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/book" component={BookDisplay}/>
                    <Route exact path="/upload" component={Upload}/>
                </Switch>
            </main>
        );
    }
}

export default Main;