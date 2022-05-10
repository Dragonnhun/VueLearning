import {Fragment} from "react";

const ArticlePreview = () => {
    return (
        <Fragment>
            <div className="col-md-6">
                <div className="card card-widget">
                    <div className="card-header">
                        <div className="user-block">
                            <img className="img-circle" src="/img/user1-128x128.jpg" alt="User Image"/>
                            <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                            <span className="description">Shared publicly - 7:30 PM Today</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at</p>
                        <div className="attachment-block clearfix">
                            <img className="attachment-img" src="/img/photo1.png" alt="Attachment Image"/>

                            <div className="attachment-pushed">
                                <h4 className="attachment-heading"><a href="https://www.lipsum.com/">Lorem ipsum text
                                    generator</a></h4>

                                <div className="attachment-text">
                                    Description about the attachment can be placed here.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a
                                    href="#">more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ArticlePreview