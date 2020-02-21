import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App'
import BookDisplay from './pages/BookDisplay';
import Upload from './pages/Upload';

class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/book" component={BookDisplay}/>
                    <Route exact path="/upload" component={Upload}/>
                </Switch>
            </main>
        );
    }
}

export default Main;