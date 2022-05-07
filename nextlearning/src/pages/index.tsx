import type { NextPage } from 'next'
import Footer from "../features/dashboard/Footer"

const IndexPage: NextPage = () => {
    return (
        <div className="sidebar-mini layout-fixed sidebar-height dark-mode sidebar-collapse">
            <div className="wrapper">
                <div className="content-wrapper">
                    <span>Content here</span>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default IndexPage