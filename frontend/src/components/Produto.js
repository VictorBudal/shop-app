import React from 'react';
import Avaliacao from './Avaliacao';

// import { Container } from './styles';

export default function Produto(props) {
    const {produto}= props;
    return (
        <div key={produto._id} className="cartao">
            <a href={`/produto/${produto._id}`}>
                <img className="medio" src={produto.imagem} alt={produto.name} />
            </a>
            <div className="corpo-cartao">
                <a href={`/produto/${produto._id}`}>
                    <h2>{produto.nome}</h2>
                </a>
                <Avaliacao avaliacao={produto.avaliacao} numbAvaliacoes={produto.numbAvaliacoes}/>
                <div className="preco">${produto.preco}</div>
            </div>
        </div>)
}