import Link from 'next/link';

import style from '../../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-user">
                        <a>Add user</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}