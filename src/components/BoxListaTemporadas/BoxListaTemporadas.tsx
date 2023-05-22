import { AppContext } from '../../context/context';
import CardTemporada from '../CardTemporada/CardTemporada'
import styles from './BoxListaTemporadas.module.scss'
import { useContext } from 'react';

const BoxListaTemporadas = () => {
    const {listaDeTemporadas} = useContext(AppContext)
    return(
        <div className={styles.BoxListaTemporadas}>
            <div className={styles.SubBoxListaTemporadas} data-aos="fade-down">
                <h2>Selecione uma Temporada:</h2>
                <div className={styles.ListaDeTemporadas}>
                    {
                        listaDeTemporadas.map(
                            (temporada) => <CardTemporada key={temporada} temporada={temporada}/>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default BoxListaTemporadas