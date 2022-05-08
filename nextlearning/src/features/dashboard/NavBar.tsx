import {Fragment} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {useAppSelector} from "../../app/hooks";
import {selectDarkMode} from "../darkMode/darkModeSlice";
import ToggleSideBarBtn from "../interface/toggleSideBarBtn";
import DarkModeBtn from "../darkMode/darkMode";

const NavBar = () => {
    const darkMode = useAppSelector(selectDarkMode)

    return (
        <Fragment>
            <nav
                className={`main-header navbar navbar-expand ${darkMode ? "navbar-dark" : "navbar-white navbar-light"}`}>
                <ul className="navbar-nav">
                    <ToggleSideBarBtn/>
                </ul>
                {/*<!-- Right navbarContainer links -->*/}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <DarkModeBtn/>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default NavBar