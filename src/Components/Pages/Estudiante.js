import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

/*Import de Data tools*/
import data from '../Requests/ToolsEst';

class Estudiante extends Component {
    tools() {
        return data
            .tools
            .map(tool => {
                return (
                    <div className="column is-mobile" key={tool.id}>
                        <div
                            style={{
                            'borderRadius': '5px'
                        }}className="card">
                            <div
                                style={{
                                'margin': '2px'
                            }}
                                className="card-header">
                                <strong>{tool.title}</strong>
                            </div>
                            <img
                                style={{
                                'backgroundPosition': 'center'
                            }}
                                src={tool.ImageUrl}
                                alt="Imagen de tool"/>
                            <div
                                style={{
                                'display': 'flex',
                                'backgroundColor': `${tool.color}`,
                                'margin': 'auto',
                                'width': '30%'
                            }}
                                className="tag is-info">{tool.Category}</div>
                            <div
                                style={{
                                'textAlign': 'center'
                            }}
                                className="content">{tool.description}</div>
                            <a href={tool.link}>
                                <div
                                    style={{
                                    'display': 'flex',
                                    'margin': 'auto',
                                    'justifyContent': 'center'
                                }}
                                    className="button is-primary is-outlined">Usar herramienta</div>
                            </a>
                        </div>
                    </div>
                )
            })
    }

    render() {
        return (
            <section className="column is-mobile">
                <div className="content has-text-centered">
                    <div
                        style={{
                        'display': 'flex',
                        'justifyContent': 'center',
                        'borderRadius': '5px',
                        'color': 'white',
                        'backgroundColor': 'black',
                        'alignItems': 'center',
                        'width': '100%',
                        'height': '60px'
                    }}
                        className="title agenda-informativa-title">Agenda informativa</div>
                </div>
                <div className="message is-info">
                    <div className="message-body">
                        <p>Elija su jornada académica para ver más.</p>
                    </div>
                </div>
                <div
                    style={{
                    'display': 'flex',
                    'justifyContent': 'center',
                    'alignSelf': 'center'
                }}>
                    <Link to="/agenda-mañana">
                        <div
                            style={{
                            'margin': 'auto',
                            'marginRight': '5px'
                        }}
                            className="button is-primary">
                            <p>Jornada Mañana</p>
                        </div>
                    </Link>
                    <Link to="/agenda-tarde">
                        <div
                            style={{
                            'margin': 'auto'
                        }}
                            className="button is-info">
                            <p>Jornada Tarde</p>
                        </div>
                    </Link>
                </div>
                <div>
                    {this.tools()}
                </div>
            </section>
        );
    }
}

export default Estudiante;