import React from 'react';
import {Link} from 'react-router-dom';

const NoFdImage = 'https://res.cloudinary.com/cristiansam/image/upload/v1538925162/No-encontrado-Hu' +
        'mberto-Munoz-Ordonez.svg';

export const NotFound = () => (
    <div className="column is-mobile">
        <img
            style={{
            'justifyContent': 'center',
            'alignContent': 'center',
            'margin': 'auto',
            'alignSelf': 'center'
        }}
            src={NoFdImage}
            alt="No encontramos lo que buscabas"/>
        <h2
            style={{
            'textAlign': 'center',
            'fontSize': '1.3em'
        }}>Oops, no existe el recurso.</h2>
        <Link to="/">
            <div
                style={{
                'display': 'flex',
                'margin': '20px auto 20px auto'
            }}
                className="button is-danger">Ir a página principal</div>
        </Link>
    </div>

)