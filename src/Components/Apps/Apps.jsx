import React, {Component} from 'react';
import data from './Data';

class Apps extends Component {
    state = {
        title: 'Apps institucionales'
    };

    Applications() {
        const AppsStyle = {
            'display': 'flex',
            'width': '100px',
            'height': '100px',
            'alignItems': 'center',
            'flexDirection': 'row !important',
            'margin': '5px 5px'
        };
        return data
            .Apps
            .map(app => {
                return <div style={AppsStyle} className="row is-mobile" key={app.id}>
                    <a href={app.url}>
                        <img
                            style={{
                            'display': 'flex',
                            'borderRadius':'10px'
                        }}
                            alt={app.name}src={app.Image}/>
                    </a>
                </div>
            })
    };
    render() {
        const text = {
            'display': 'flex',
            'textAlign': 'center',
            'justifyContent': 'center'
        }
        return (
            <section>
                <div style={text} className="title">{this.state.title}</div>
                <div
                    style={{
                    'display': 'flex'
                }}
                    className="row">
                    {this.Applications()}
                </div>
            </section>
        );
    }
}

export default Apps;