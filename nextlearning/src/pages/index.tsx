import type {NextPage} from 'next'
import {Fragment} from "react";
import ArticlePreview from "../features/articleFeed/articlePreview";


const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <ArticlePreview></ArticlePreview>
        </Fragment>
    )
}

export default IndexPage
