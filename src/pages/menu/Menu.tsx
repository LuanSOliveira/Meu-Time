import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context'
import styles from './Menu.module.scss'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import BoxInfoConta from '../../components/BoxInfoConta/BoxInfoConta';

const Menu = () => {
    const {usuarioLogado} = useContext(AppContext)

    const navegar: NavigateFunction = useNavigate()

    useEffect(() => {
        if(usuarioLogado.email === ''){
            navegar('/')
        }
    },[])

    return(
        <div className={styles.Menu}>
            <BoxInfoConta/>
        </div>
    )
}

export default Menu