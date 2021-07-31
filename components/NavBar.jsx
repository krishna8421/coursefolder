import styles from '../styles/NavBar.module.scss'


function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h3>Course Folder</h3>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
