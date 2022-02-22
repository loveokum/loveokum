import React from "react";
import './Project.css'
// import project1 from "./image/project2.jpg"
import project2 from "./image/project3.jpeg"



function Project() {
    return (
        <div className="project component__space" id="Portfolio">

            <div className="heading">

                <h1 className="heading">
                    My Latest Projects
                </h1>

                <p className="heading p__color">
                    I have worked on a variety of projects.
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
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Building scalable applications</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>

                        </div>

                    </div>



                    <div className="col__3">
                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Building scalable applications</h4>
                                <a href="#https://github.com/curiouslove/SMSAuthenticationWithTwilio" className="project__btn">View Details</a>
                            </div>

                        </div>

                    </div>



                    <div className="col__3">
                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Building scalable applications</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>

                        </div>

                    </div>



                    <div className="col__3">
                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Building scalable applications</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>

                        </div>

                    </div>



                    <div className="col__3">
                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Building scalable applications</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>

                        </div>

                    </div>



                    <div className="col__3">
                        <div className="project__box pointer relative">

                            <div className="project__box__img pointer relative">

                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>

                                <div className="mask__effect">
                                </div>

                            </div>

                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h4 className="project__text">Building scalable applications</h4>
                                    <a href="#" className="project__btn">View Details</a>
                                </div>

                        </div>

                    </div>

                </div>

                <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                    <button className="view__more pointer btn">View more</button>
                </div>


            </div>


        </div>
    )
}

export default Project