import type {NextPage} from 'next'
import {Fragment} from "react";
import ArticlePreview from "../features/articleFeed/articlePreview";

const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <section className="content">
                <div className="container-fluid">
                    <ArticlePreview></ArticlePreview>
                </div>
            </section>
        </Fragment>
    )
}

export default IndexPage