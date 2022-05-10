import {Fragment} from "react";
import Logo from "./Logo";
import UserProfileModule from "../../userData/userProfileModule";

const SideBarContainer = () => {
    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Logo/>
                <div className="sidebar">
                    <UserProfileModule/>
                </div>
            </aside>
        </Fragment>
    )
}

export default SideBarContainer