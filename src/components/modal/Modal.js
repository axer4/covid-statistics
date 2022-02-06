import styles from './Modal.module.css'
import heart from '../../images/heartbeat.svg'
import skull from '../../images/skull.svg'
import recovered from '../../images/medical.svg'
export default function Modal({ isOpen, onCloseModal,item }) {
    if (!isOpen) {
        return null
    }
        return  (<div className = { styles.overlay } onClick = {onCloseModal} >
            <div className={styles.modal}>
                <h3 className={styles.heading}>{item.Country}</h3>
                <ul className={styles.modalList}>
                    <li className={styles.modalItem}><div><img src={heart} alt='heart' className={styles.svg}/>Total Confirmed</div>{item.TotalConfirmed}</li>
                    <li className={styles.modalItem}><div><img src={skull} alt='skull' className={styles.svg}/>Total Deaths</div>{item.TotalDeaths}</li>
                    <li className={styles.modalItem}><div><img src={recovered} alt='medical-file' className={styles.svg} />Total Recovered</div>{item.TotalRecovered}</li>
                    <button type='button' onClick={onCloseModal} className={styles.modalButton}>OK</button>
                </ul>
            </div>
                </div> )
}