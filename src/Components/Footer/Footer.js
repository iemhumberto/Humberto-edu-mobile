import React, {Component} from 'react';

class Footer extends Component {
    state = {
        version: '1.0 Beta'
    }
    render() {
        return (
            <section
                style={{
                'margin': '0',
                'backgroundColor': 'black',
                'height': '80px'
            }}
                className="footer">
                <div className="content has-text-centered">
                    <p
                        style={{
                        'fontSize': '1.3em',
                        'color': 'white'
                    }}>IEM Humberto Muñoz Ordoñez</p>
                </div>
                <div
                    style={{
                    'backgroundColor': 'white',
                    'width':'50%',
                    'justifyContent':'center',
                    'margin':'0 auto 20px auto',
                    'fontWeight':'bold',
                    'borderRadius':'50px'
                }}
                    className="content has-text-centered">
                    2018
                </div>
                <div className="content has-text-centered">
                {this.state.version}
                </div>
            </section>
        );
    }
}

export default Footer;