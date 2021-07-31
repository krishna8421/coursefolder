import styles from '../styles/CategoryBar.module.scss'
import Link from 'next/link'


function NavBar() {
    return (
        <div className={styles.categorybar}>
            <div className={styles.categoryBarLinks}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Category1</a>
                        </Link>
                    </li>
                </ul>
           </div>
            <div className="contact">

            </div>

        </div>
    )
}

export default NavBar
