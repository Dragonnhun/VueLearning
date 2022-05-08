import {useAppDispatch} from '../../app/hooks'

import {toggleSideBar} from './interfaceSlice'
import {Fragment} from "react";

const ToggleSideBarBtn = () => {
    const dispatch = useAppDispatch()

    return (
        <Fragment>
            <a className="nav-link"
               data-widget="pushmenu"
               role="button"
               onClick={() => dispatch(toggleSideBar())}
            >
                <i className="fas fa-bars"/>
            </a>
        </Fragment>
    )
}

export default ToggleSideBarBtn