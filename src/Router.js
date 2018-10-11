import React, {Component} from 'react';
/*Imports de components*/
import App from './App';
import {NotFound} from './Components/NotFound/NotFound';
import Estudiante from './Components/Pages/Estudiante';
import Docente from './Components/Pages/Docente';
import Visitante from './Components/Pages/Visitante';
import MiColegio from './Components/Pages/Mi-colegio';

import {Switch, Route} from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/estudiante" component={Estudiante}></Route>
                    <Route exact path="/docente" component={Docente}></Route>
                    <Route exact path="/visitante" component={Visitante}></Route>
                    <Route exact path="/mi-colegio" component={MiColegio}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Router;