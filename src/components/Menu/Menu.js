import styles from './Menu.module.css';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

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
                    <NavLink exact to="/" activeClassName={styles.menuItemActive}>
                        Home
                    </NavLink>
                </li>
                {auth ? (
                        <>
                            <li className={styles.menuItem}>  
                                <NavLink to="/profil" activeClassName={styles.menuItemActive}>
                                    Mój profil
                                </NavLink>
                            </li>
                            <li className={styles.menuItem}>  
                                <a href="#" onClick={logout}>Wyloguj</a>
                            </li>
                        </> 
                     )
                     : (
                        <>
                            <li className={styles.menuItem}>
                                <NavLink to="/rejestracja" activeClassName={styles.menuItemActive}>Zarejestruj</NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" onClick={login}>Zaloguj</a>
                            </li>
                        </>
                     )
                }
            </ul>
        </div>
    );
}

export default Menu;