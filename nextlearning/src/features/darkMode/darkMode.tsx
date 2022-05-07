import {useAppSelector, useAppDispatch} from '../../app/hooks'

import {selectDarkMode, toggle} from "./darkModeSlice";
import {Fragment, useState} from "react";

const DarkModeBtn = () => {
    const dispatch = useAppDispatch()

    const darkMode = useAppSelector(selectDarkMode)

    return (
        <Fragment>
            <a className="nav-link"
               data-widget="control-sidebar"
               data-slide="true"
               role="button"
               onClick={() => dispatch(toggle())}
               title={darkMode ? "Switch to Light mode" : "Switch to Dark mode"}>
                <i className={darkMode ? "fas fa-moon" : "fas fa-sun"}/>
            </a>
        </Fragment>
    );
};

export default DarkModeBtn