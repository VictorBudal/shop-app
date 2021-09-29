import React from 'react';

// import { Container } from './styles';

function CaixaMensagem(props) {
    

    return (
        <div className={`alerta alerta-${props.variante || 'info'}`}>{props.children}</div>
    )
}

export default CaixaMensagem;