import React, {Component} from 'react';
import data from './Data';

class CardsHome extends Component {
    cards() {
        return data
            .cards
            .map(card => {
                return (
                    <div className="column is-mobile" key={card.id}>
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
            </section>
        );
    }
}

export default CardsHome;