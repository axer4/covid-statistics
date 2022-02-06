import logo from '../../images/logo.svg'
import styles from './Header.module.css'
function Header({filter,handleFilterChange}) {
    return <div className={styles.headerBlock}>
        <img src={logo} alt='logo'/>
        <h1 className={styles.heading}>STATISTIC</h1>
        <input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder='Search...'
            name='filter'
            className={styles.input}
            onChange = {handleFilterChange}
             value={filter}
        />
    </div>
}
export default Header