import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import data from '../../Components/Requests/DocTools';

const Insig = 'https://res.cloudinary.com/cristiansam/image/upload/v1538926584/Docentes-insigni' +
        'a-Humberto-Munoz.svg';

class Docente extends Component {
    doctools() {
        return data
            .doctools
            .map(doctool => {
                return (
                    <a href={doctool.url}>
                        <div className="tools-doc">
                            <div
                                style={{
                                'justifyContent': 'center',
                                'margin': 'auto',
                                'borderRadius': '5px'
                            }}
                                className="card is-mobile"
                                key={doctool.id}>
                                <div
                                    style={{
                                    'padding': '5px'
                                }}
                                    className="card-header">
                                    <strong>{doctool.title}</strong>
                                </div>
                                <img
                                    style={{
                                    'display': 'flex',
                                    'justifyContent': 'center',
                                    'margin': 'auto',
                                    'padding': '4px'
                                }}
                                    src={doctool.imageUrl}
                                    alt="Imágen de la tool"/>
                            </div>
                        </div>
                    </a>
                )
            })
    }
    render() {
        return (
            <section>
                <div className="column is-mobile">
                    <p className="title-principal">Bienvenido, docente.</p>
                </div>
                <div
                    style={{
                    'margin': '20px',
                    'borderRadius': '8px',
                    'boxShadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                }}
                    className="column card ">
                    <div className="column card-header">
                        <p
                            style={{
                            'display': 'flex',
                            'justifyContent': 'center'
                        }}>
                            <strong>Docentes insignia</strong>
                        </p>
                    </div>
                    <div className="card-media">
                        <img
                            style={{
                            'display': 'flex',
                            'width': '50%',
                            'justifyContent': 'center',
                            'margin': '10px auto 10px auto'
                        }}
                            src={Insig}
                            alt="Ícono de reconocimiento"/>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>Reconocimiento a docentes de nuestra Institución por su liderazgo y pasión
                                por su labor de aprender para enseñar. Enseñar para la vida.</p>
                        </div>
                        <Link to="/maestros-insignia">
                            <div className="button is-info b-docentes-insignia">Ver docentes insignia</div>
                        </Link>
                    </div>
                </div>
                <div>{this.doctools()}</div>
            </section>
        );
    }
}

export default Docente;