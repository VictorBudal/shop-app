import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Produto from '../components/Produto';
import CaixaMensagem from '../components/CaixaMensagem';
import CaixaCarregar from '../components/CaixaCarregar';

function TelaHome() {
    const [produtos, setProdutos] = useState([]);
    const [carregar, setCarregar] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        const fecthData = async () => {
            try {
                setCarregar(true);
                const { data } = await axios.get('/api/produtos');
                setCarregar(false);
                setProdutos(data);

            } catch (err) {
                setErro(err.message);
                setCarregar(false);
            }

        }
        fecthData();
    }, [])
    return (
        <div>
            {carregar ?
                <CaixaCarregar></CaixaCarregar>
                :
                erro ? <CaixaMensagem variante="perigo">{erro}</CaixaMensagem>
                    : (
                        <div className="linha centro">
                            {produtos.map((produto) => (
                                <Produto key={produto._id} produto={produto} />
                            ))
                            }

                        </div>

                    )
            }

        </div>
    );
}

export default TelaHome;