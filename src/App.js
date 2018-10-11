import React, {Component} from 'react';
import './App.css';
/*Imports de los Components*/
import NavigationBar from './Components/NavigationBar';
import CardsHome from './Components/Home/CardsHome/CardsHome';
import Footer from './Components/Footer/Footer';
class App extends Component {
    render() {
        return (
            <section>
                <NavigationBar/>
                <CardsHome/>
                <Footer/>
            </section>
        );
    }
}

export default App;

