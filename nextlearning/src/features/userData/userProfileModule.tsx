import {Fragment} from "react";
import Link from "next/link";
import {useAppSelector} from '../../app/hooks'

import {selectUserStatus} from './userDataSlice'
import {selectFullName} from './userDataSlice'
import LoginBtn from "./loginBtn";

const UserProfileModule = () => {

    const fullName = useAppSelector(selectFullName)
    const status = useAppSelector(selectUserStatus)

    if (status !== 'idle') {
        return (
            <Fragment>
                <div className="user-panel mt-3 pb-3 mb-3 d-flex nav">
                    <ul className="nav nav-pills nav-sidebar flex-column">
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link active">
                                    <p>
                                        <i className="nav-icon fas fa-sign-in-alt"/> Login
                                    </p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="/img/user2-160x160.jpg" className="img-circle elevation-2"
                         alt="User Image"/>
                </div>
                <div className="info">
                    <Link href="/">
                        <a href="#" className="d-block">{fullName}</a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default UserProfileModule