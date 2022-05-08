import {Fragment} from "react";
import Link from 'next/link';
import Image from "next/image";

const Logo = () => {
    return (
        <Fragment>
            <Link href="/" >
                <a className="brand-link">
                    <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
                    <span className="brand-text font-weight-light">Simple Chat</span>
                </a>
            </Link>
        </Fragment>
    )
}

export default Logo