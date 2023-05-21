import { AppContext } from '../../context/context';
import CardLiga from '../CardLiga/CardLiga';
import styles from './BoxListaLigas.module.scss'
import { useContext, useState } from 'react';

const BoxListaLigas = () => {
    const [filtro, setFiltro] = useState('')

    const {temporadaSelecionada, listaDeLigas} = useContext(AppContext)

    return(
        <div className={styles.BoxListaLigas}>
            <div className={styles.SubBoxListaLigas}>
                <h2 className={styles.Titulo}>Selecione um País:</h2>
                <input 
                    type="text" 
                    className={styles.Filtro} 
                    placeholder='Buscar por País'
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <div className={styles.ListaDeLigas}>
                    {
                        (!filtro) 
                        ? 
                            listaDeLigas.map(
                                (liga) => (liga.seasons.includes(temporadaSelecionada)) && <CardLiga key={liga.id} liga={liga}/>
                            )
                        :
                            listaDeLigas.map(
                                (liga) => (liga.name.toLowerCase().includes(filtro.toLowerCase()) && liga.seasons.includes(temporadaSelecionada)) && 
                                    <CardLiga key={liga.id} liga={liga}/>
                            )
                    }
                </div>
            </div>

        </div>
    )
}

export default BoxListaLigas