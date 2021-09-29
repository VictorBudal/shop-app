import React from 'react';
import Avaliacao from '../components/Avaliacao';
import data from '../data';
import { Link } from 'react-router-dom'


// import { Container } from './styles';

function TelaProduto(props) {
    const produto = data.produtos.find(x => x._id === props.match.params.id);
    if (!produto) {
        return <div>Produto nao encontrado</div>
    }
    return (
        <div>
            <Link to="/">Voltar para os resultados</Link>
            <div className="linha top">
                <div className="col-2">
                    <img className="grande" src={produto.imagem} alt={produto.nome}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{produto.nome}</h1>
                        </li>
                        <li>
                            <Avaliacao avaliacao={produto.avaliacao} numbAvaliacoes={produto.numbAvaliacoes} />
                        </li>
                        <li>
                            Preco : ${produto.preco}
                        </li>
                        <li>
                            <p>{produto.descricao}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="cartao corpo-cartao">
                        <ul>
                            <li>
                                <div className="linha">
                                    <div>Preco</div>
                                    <div className="preco">{produto.preco}</div>
                                </div>
                            </li>
                            <li>
                                <div className="linha">
                                    <div>Status</div>
                                    <div>
                                        {produto.contaNoEstoque > 0 ? (<span className="sucesso">Em estoque</span>) :
                                            (<span className="perigo">indisponível</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primeiro bloco">Adicionar no carrinho</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaProduto;