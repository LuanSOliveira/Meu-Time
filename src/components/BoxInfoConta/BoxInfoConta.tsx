import { useContext } from 'react';
import styles from './BoxInfoConta.module.scss'
import { AppContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const BoxInfoConta = () => {
    const {usuarioLogado, setUsuarioLogado} = useContext(AppContext)
    const navegar = useNavigate()

    function Sair():void {
        navegar('/')
        setUsuarioLogado({email : '', chave: '', requisicoes: {atual : 0, limite : 0}})
    }

    return(
        <div className={styles.BoxInfoConta}>
            <div className={styles.SubBoxInfoConta}>
                <img 
                    src="https://www.api-football.com/public/img/home1/hero-banner.png" 
                    alt="Baner Football" 
                    className={styles.ImagemBanner}
                />
                <div className={styles.InfoConta}>
                    <h3>{usuarioLogado.email}</h3>
                    <p>Requisições/dia: {`${usuarioLogado.requisicoes.atual} / ${usuarioLogado.requisicoes.limite}`}</p>
                    <button 
                        className={styles.BotaoSair}
                        onClick={Sair}
                    >Sair</button>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoConta