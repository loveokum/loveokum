import React from "react";
import './Blog.css'
import blog1 from "./image/blog2.jpg";


function Blog(){
    return(
        <div className="blog component__space" id="Blog">
            <div className="heading">

                <h1 className="heading">
                    Latest News and Updates
                </h1>

                <p className="heading p__color">
                    Important links, information and articles I think are relevant.
                </p>

                <p className="heading p__color">
                    Take a look at them below.
                </p>

            </div>

            <div className="container">

                <div className="row">


                    <div className="col__3">

                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={blog1} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="Blog__meta absolute">
                                <h5 className="project__text">How to send emails from a React application without a backend(server)</h5>
                                <h4 className="project__text">Using EmailJS</h4>
                                <a href="https://medium.com/@patienceadajah/how-to-send-emails-from-a-react-application-without-a-backend-server-1dd8718ceedd/" className="blog project__btn btn" target="_blank" rel="noreferrer"> Learn More</a>
                            </div>

                        </div>


                    </div>



                    <div className="col__3">

                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={blog1} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="Blog__meta absolute">
                                <h5 className="project__text"> DevDocs combines multiple API documentations in a fast, organized, and searchable interface.</h5>
                                <h4 className="project__text">Go to DevDocs</h4>
                                <a href="https://devdocs.io/" className="blog project__btn btn" target="_blank" rel="noreferrer"> Learn More</a>
                            </div>

                        </div>


                    </div>

                    



                    <div className="col__3">

                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={blog1} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="Blog__meta absolute">
                                <h5 className="project__text">To combine multiple pdf documents together</h5>
                                <h4 className="project__text">Visit Webpage</h4>
                                <a href="https://media-tools.perbility.de/" className="blog project__btn btn" target="_blank" rel="noreferrer"> Learn More</a>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Blog
