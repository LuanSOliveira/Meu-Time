import BoxLogin from '../../components/BoxLogin/BoxLogin'
import styles from './Home.module.scss'

const Home = () => {
    return(
        <div className={styles.Home}>
            <BoxLogin/>
        </div>
    )
}

export default Home