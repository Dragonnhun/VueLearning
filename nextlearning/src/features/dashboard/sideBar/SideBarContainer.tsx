import {Fragment} from "react";
import Logo from "./Logo";

const SideBarContainer = () => {
    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Logo/>
                <div className="sidebar">

                </div>
            </aside>
        </Fragment>
    )
}

export default SideBarContainer