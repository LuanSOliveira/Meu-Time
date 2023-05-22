import { useState, useContext } from 'react';
import styles from './BoxLogin.module.scss'
import { IUsuario } from '../../interfaces/Interfaces';
import { AppContext } from '../../context/context';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const BoxLogin = () => {
    const [login, setLogin] = useState<string>('')
    const {setUsuarioLogado} = useContext(AppContext)

    const navegar: NavigateFunction = useNavigate()

    function AtualizaUsuarioLogado(valida:boolean, infoUsuario:IUsuario):void{
        if(valida){
            setUsuarioLogado(infoUsuario)
            navegar('/Menu')
        }
        else{
            alert("Informe uma 'Key' válida!")
        }

    }

    function FazerLogin(event: React.FormEvent):void{
        event.preventDefault();
        fetch("https://v3.football.api-sports.io/status", {
	    "method": "GET",
	    "headers": {"x-apisports-key": `${login}`}
        })
        .then(response => response.json())
        .then((data) => {
            let validar:boolean = false
            let usuario:IUsuario = {email : '', chave: '', requisicoes: {atual : 0, limite : 0}}
            const resposta = data.response

            if(data.results > 0){
                validar = true
                usuario = {
                            email : resposta.account.email, 
                            chave: login, 
                            requisicoes: {atual : 100 - resposta.requests.current, limite : resposta.requests.limit_day}
                          }
            }
            AtualizaUsuarioLogado(validar,usuario)
        })
        .catch(err => {console.log(err);})
    }

    return(
        <div className={styles.BoxLogin} data-aos="zoom-in">
            <h1 className={styles.Titulo}>Meu Time</h1>
            <form className={styles.Formulario} onSubmit={(e) => FazerLogin(e)}>
                <input 
                    className={styles.Login} 
                    type="text" 
                    placeholder='Informe a Key de acesso' 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                    required
                />
                <button className={styles.Botao}>Acessar</button>
                <p className={styles.TextoLink}>Não tem conta? 
                    <a 
                        href='https://dashboard.api-football.com/register' 
                        target='blank' 
                        className={styles.Link}
                    >
                        Clique aqui
                    </a>
                </p>
            </form>
        </div>
    )
}

export default BoxLogin