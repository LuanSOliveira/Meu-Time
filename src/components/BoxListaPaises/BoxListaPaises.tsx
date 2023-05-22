import { AppContext } from '../../context/context';
import CardPais from '../CardPais/CardPais';
import styles from './BoxListaPaises.module.scss'
import { useContext, useState } from 'react';

const BoxListaPaises = () => {
    const [filtro, setFiltro] = useState('')
    const {listaDePaises} = useContext(AppContext)

    return(
        <div className={styles.BoxListaPaises}>
            <div className={styles.SubBoxListaPaises} data-aos="fade-right" data-aos-duration="2000">
                <h2 className={styles.Titulo}>Selecione um País:</h2>
                <input 
                    type="text" 
                    className={styles.Filtro} 
                    placeholder='Buscar por País'
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <div className={styles.ListaDePaises}>
                    {
                        (!filtro) 
                        ? 
                            listaDePaises.map(
                                (pais) => <CardPais key={pais.name} pais={pais}/>
                            )
                        :
                            listaDePaises.map(
                                (pais) => (pais.name.toLowerCase().includes(filtro.toLowerCase())) && <CardPais key={pais.name} pais={pais}/>
                            )
                    }                
                </div>
            </div>
        </div>
    )
}

export default BoxListaPaises