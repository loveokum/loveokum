import React from "react";
import './Project.css'
// import project1 from "./image/project2.jpg"
import project2 from "./image/project3.jpeg"



function Project() {
    return (
        <div className="project component__space" id="Portfolio">

            <div className="heading">

                <h1 className="heading">
                    My Latest Projects and Social Media Pages
                </h1>

                <p className="heading p__color">
                    I have worked on a variety of projects and I am also exploring content creation.
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
                                <h5 className="project__text">Project On Github</h5>
                                <h4 className="project__text">A simple customer database</h4>
                                <a href="https://github.com/Curiouslove/Customer-Database" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
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
                                <h5 className="project__text">Project On Github</h5>
                                <h4 className="project__text">Visitors Log Application</h4>
                                <a href="https://github.com/Curiouslove/VisitorsLogApplication" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
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
                                <h5 className="project__text">Project On Github</h5>
                                <h4 className="project__text">Randomly generated UUID</h4>
                                <a href="https://github.com/Curiouslove/UUIDGenerator-with-Flask" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
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
                                <h5 className="project__text">TikTok</h5>
                                <h4 className="project__text">Fun contents on tiktok</h4>
                                <a href="https://www.tiktok.com/@lovieokum?_t=8monz48KySk&_r=1" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
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
                                <h5 className="project__text">Instagram</h5>
                                <h4 className="project__text">Updates about my work and Life</h4>
                                <a href="https://www.instagram.com/lovieokum?igsh=MXNjaXAzZno4ZDVvbg%3D%3D&utm_source=qr" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
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
                                    <h5 className="project__text">Snapchat</h5>
                                    <h4 className="project__text">Connect and chat with me</h4>
                                <a href="https://www.snapchat.com/add/luarelcollins?share_id=11z55ES8Txeg5jBabyRjqQ&locale=en_DE" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                                </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Project