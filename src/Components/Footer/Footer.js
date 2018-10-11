import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <section
                style={{
                'margin': '0 0 0 0',
                'padding': '0 0',
            }}>
                <div className="column is-mobile">
                    <div
                        style={{
                        'backgroundColor': 'black',
                        'width': '100%',
                        'height': '200px',
                        'borderRadius': '4px'
                    }}
                        className="footer">
                        <p
                            style={{
                            'color': 'white',
                            'fontSize': '1.4em'
                        }}
                            className="content has-text-centered">IEM Humberto Muñoz Ordoñez</p>
                        <p
                            style={{
                            'color': 'black',
                            'display': 'flex',
                            'width': '30%',
                            'borderRadius': '30px',
                            'justifyContent': 'center',
                            'margin': 'auto',
                            'fontSize': '1.3em',
                            'backgroundColor': 'white'
                        }}
                            className="content has-text-centered">
                            <strong>2018</strong>
                        </p>
                        <p
                            style={{
                            'color': 'black',
                            'display': 'flex',
                            'width': '100%',
                            'borderRadius': '',
                            'justifyContent': 'center',
                            'margin': '10px auto 30% auto',
                            'fontSize': '1.3em',
                            'backgroundColor': 'white'
                        }}
                            className="content has-text-centered">
                            <strong>Versión 0.3.1 Beta</strong>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;