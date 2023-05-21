import { useState, useContext } from 'react'
import styles from './BoxListaTimes.module.scss'
import { AppContext } from '../../context/context'
import CardTime from '../CardTime/CardTime'

const BoxListaTimes = () => {
    const [filtro, setFiltro] = useState('')
    const {listaDeTimes} = useContext(AppContext)

    return(
        <div className={styles.BoxListaTimes}>
            <div className={styles.SubBoxListaTimes}>
                <h2 className={styles.Titulo}>Selecione um Time:</h2>
                <input 
                    type="text" 
                    className={styles.Filtro} 
                    placeholder='Buscar por País'
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <div className={styles.ListaDeTimes}>
                    {
                        (!filtro) 
                        ? 
                            listaDeTimes.map(
                                (time) => <CardTime key={time.id} time={time}/>
                            )
                        :
                            listaDeTimes.map(
                                (time) => (time.name.toLowerCase().includes(filtro.toLowerCase())) && <CardTime key={time.id} time={time}/>
                            )
                    }                
                </div>
            </div>
        </div>
    )
}

export default BoxListaTimes