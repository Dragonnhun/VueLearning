import Footer from "../../features/dashboard/Footer";
import NavBar from "../../features/dashboard/NavBar";
import SideBarContainer from "../../features/dashboard/sideBar/SideBarContainer";
import {useAppSelector} from "../../app/hooks";
import {selectDarkMode} from "../../features/darkMode/darkModeSlice";
import {selectToggleSideBar} from "../../features/interface/interfaceSlice";
import {selectUserStatus} from "../../features/userData/userDataSlice";


const Layout = ({children}) => {
    const darkMode = useAppSelector(selectDarkMode)
    const sideBarIsOpen = useAppSelector(selectToggleSideBar)

    const status = useAppSelector(selectUserStatus)

    if (status === 'loading') {
        return (
            <>
                <span>Loading</span>
            </>
        )
    }

    return (
        <>
            <div className={`sidebar-mini layout-fixed ${darkMode && "dark-mode"}
            ${sideBarIsOpen && "sidebar-collapse"}`}
                 style={{height: "auto"}}>
                <div className="wrapper">
                    <NavBar/>
                    <SideBarContainer/>
                    <div className="content-wrapper">
                        <main>{children}</main>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Layout