import React from "react";
import './Blog.css'
import blog1 from "./image/blog2.jpg";


function Blog(){
    return(
        <div className="blog component__space" id="Blog">
            <div className="heading">

                <h1 className="heading">
                    Latest News
                </h1>

                <p className="heading p__color">
                    I have written amazing articles and social media contributions.
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
                                <h5 className="project__text">Blogging</h5>
                                <h4 className="project__text">Always blogging about amazing stuff</h4>
                                <a href="#" className="blog project__btn btn"> Read More</a>
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
                                <h5 className="project__text">Blogging</h5>
                                <h4 className="project__text">Always blogging about amazing stuff</h4>
                                <a href="#" className="blog project__btn btn"> Read More</a>
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
                                <h5 className="project__text">Blogging</h5>
                                <h4 className="project__text">Always blogging about amazing stuff</h4>
                                <a href="#" className="blog project__btn btn"> Read More</a>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Blog
