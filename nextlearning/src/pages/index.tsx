import type { NextPage } from 'next'
import Footer from "../features/dashboard/Footer"
import NavBar from "../features/dashboard/NavBar";
import SideBarContainer from "../features/dashboard/sideBar/SideBarContainer";
import {useAppSelector} from "../app/hooks";
import {selectDarkMode} from "../features/darkMode/darkModeSlice";
import {selectToggleSideBar} from "../features/interface/interfaceSlice";

const IndexPage: NextPage = () => {
    const darkMode = useAppSelector(selectDarkMode)
    const sideBarIsOpen = useAppSelector(selectToggleSideBar)
    return (
        <div className={`sidebar-mini layout-fixed ${darkMode && "dark-mode"} 
        ${sideBarIsOpen && "sidebar-collapse"}`}
             style={{height: "auto"}}>
            <div className="wrapper">
                <NavBar/>
                <SideBarContainer/>
                <div className="content-wrapper">
                    <span>Content here</span>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default IndexPage