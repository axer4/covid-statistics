
import { useState,useEffect} from 'react';
import Modal from '../modal/Modal'
import styles from './countriesList.module.css'
function CountriesList({ data }) {
    const [isOpenModal, setModeModal] = useState(false);
    const [item, setItem] = useState('')
    const openModal = (item) => {
        setModeModal(!isOpenModal);
        setItem(item);
    }
      const onCloseModal = () => {
        setModeModal(!isOpenModal);
    }
      const keyDownListener = (key) => {
        if (key.code === `Escape`) {
            onCloseModal();
        }
    }
    useEffect(() => { window.addEventListener('keydown', keyDownListener) })
    return <div className={styles.countriesBlock}>
        <ul className={styles.list}>
            <li className={styles.firstItem}>
                <div className={styles.separator}>
                    <span className={styles.numberSymbol}>
                        №
                    </span>
                    
                    <span className={styles.country}>
                        Country
                    </span>
                </div>
                <span className={styles.total}>Total Cofirmed</span>
            </li>
                { data.map((item, index) => {
                    return <li key={item.ID} className={styles.item} onClick={() => { openModal(item) }} >
                        <div className={styles.separator}>
                            <span className={styles.number}>
                                {index + 1}
                            </span>
                            <span className={styles.countryName}>{item.Country}</span>
                        </div>
                        <span className={styles.totalNumbers}>
                            {item.TotalConfirmed}
                        </span>
                    </li>
                })}
             <Modal item={item}
               isOpen={isOpenModal}
               onCloseModal={onCloseModal}
                        />
        </ul>
    </div>
}
export default CountriesList