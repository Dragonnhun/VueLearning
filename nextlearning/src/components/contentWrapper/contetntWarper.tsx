import {Fragment} from "react";

const ContentWrapper = ({}) => {
    return (
        <Fragment>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
        </Fragment>
    )
}

export default ContentWrapper