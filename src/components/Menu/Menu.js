import styles from './Menu.module.css';
import useAuth from '../../hooks/useAuth';



function Menu() {
    const [auth, setAuth] = useAuth();

    const login = (e) => {
        e.preventDefault();
        setAuth(true);
    }
    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
    }
    return (
        <div className={`${styles.menuContainer} breadcrumb`}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                {/* eslint-disable-next-line */}
                    <a href="#">Home</a>
                </li>
                {auth ? (
                     <li className={styles.menuItem}>  
                        <a href="#" onClick={logout}>Wyloguj</a>
                     </li> 
                     )
                     : (
                     <li className={styles.menuItem}>
                        <a href="#" onClick={login}>Zaloguj</a>
                     </li>
                     )
                }
            </ul>
        </div>
    );
}

export default Menu;