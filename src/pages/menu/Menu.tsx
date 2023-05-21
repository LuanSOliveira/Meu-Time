import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context'
import styles from './Menu.module.scss'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import BoxInfoConta from '../../components/BoxInfoConta/BoxInfoConta';
import BoxInfoPesquisa from '../../components/BoxInfoPesquisa/BoxInfoPesquisa';
import BoxListaPaises from '../../components/BoxListaPaises/BoxListaPaises';
import BoxListaTemporadas from '../../components/BoxListaTemporadas/BoxListaTemporadas';
import BoxListaLigas from '../../components/BoxListaLigas/BoxListaLigas';
import BoxListaTimes from '../../components/BoxListaTimes/BoxListaTimes';
import BoxEstatisticas from '../../components/BoxEstatisticas/BoxEstatisticas';

const Menu = () => {
    const {usuarioLogado, paisSelecionado, temporadaSelecionada, ligaSelecionada, listaDeTimes, timeSelecionado} = useContext(AppContext)

    const navegar: NavigateFunction = useNavigate()

    useEffect(() => {
        if(usuarioLogado.email === ''){
            navegar('/')
        }
    },[])

    return(
        <div className={styles.Menu}>
            <div className={styles.SubBoxMenu}>
                <BoxInfoConta/>
                <BoxInfoPesquisa/>
                {
                    (!paisSelecionado.name) && <BoxListaPaises/>
                }
                {
                    (paisSelecionado.name && !temporadaSelecionada) && <BoxListaTemporadas/>
                }
                {
                    (temporadaSelecionada && !ligaSelecionada.name) && <BoxListaLigas/>
                }
                {
                    (listaDeTimes.length > 0 && timeSelecionado.id === 0) && <BoxListaTimes/>
                }
                {
                    (timeSelecionado.id > 0) && <BoxEstatisticas/>
                }
            </div>
        </div>
    )
}

export default Menu