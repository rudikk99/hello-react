import React, {Component} from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Visualization from './VisualizationComponent';
import Personall from './PersonallComponent';
import { EMPLOYEES } from '../shared/employees';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: EMPLOYEES
        }; 
    }
    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/personall' component={Personall} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/visualization' component={Visualization} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main; 