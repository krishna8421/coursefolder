import styles from '../styles/NavBar.module.scss'
import Link from 'next/link'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <li>                        
                    <Link href="/">
                        <a>Course Folder</a>
                    </Link>
                </li>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>                        
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>                        
                        <Link href="/admin">
                            <a>Admin</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
