import {NextPage} from "next";
import {selectBannerText} from "../features/interface/interfaceSlice";
import {useAppSelector} from "../app/hooks";
import Link from "next/link";

const LoginPage: NextPage = () => {
    const bannerText = useAppSelector(selectBannerText)

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <span className="h1">{bannerText}</span>
                    </div>
                    <div className="card-body">

                        <p className="mb-0">
                            <Link href="/">
                                <a className="text-center">Register a new membership</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage