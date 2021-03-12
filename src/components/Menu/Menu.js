import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                {/* eslint-disable-next-line */}
                    <a href="#">Home</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;