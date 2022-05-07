import {useAppDispatch } from '../../app/hooks'

import {toggleSideBar} from './interfaceSlice'

const ToggleSideBarBtn = () => {
    const dispatch = useAppDispatch()

    return (
        <a className="nav-link"
           data-widget="pushmenu"
           role="button"
           onClick={() => dispatch(toggleSideBar())}
        >
            <i className="fas fa-bars"/>
        </a>
    )
}

export default ToggleSideBarBtn