import type { NextPage } from 'next'
import Footer from "../features/dashboard/Footer"
import clientPromise from '../../lib/mongodb';


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

export async function getServerSideProps(context) {
    try {
        await clientPromise
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands

        return {
            props: { isConnected: true },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}