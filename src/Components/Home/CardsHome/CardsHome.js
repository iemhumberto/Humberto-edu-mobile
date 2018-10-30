import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import data from './Data';

/*Imports de clases del Layout Home*/
import Apps from '../../Apps/Apps';

class CardsHome extends Component {
    cards() {
        return data
            .cards
            .map(card => {
                return (
                    <div className="column is-mobile" key={card.id}>
                        <Link to={card.url}>
                            <div
                                style={{
                                'color': 'gray',
                                'backgroundImage': `url(${card.BackImage})`
                            }}
                                className="card  card-home">
                                <div
                                    style={{
                                    'color': 'white'
                                }}className="title">{card.title}</div>
                                <div
                                    style={{
                                    'color': 'white'
                                }}className="content">{card.description}</div>
                            </div>
                        </Link>
                    </div>
                );
            })
    }
    render() {
        return (
            <section>
                <div>
                    {this.cards()}
                </div>
                <Apps/>
            </section>
        );
    }
}

export default CardsHome;