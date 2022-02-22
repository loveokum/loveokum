import React from "react"
import './About.css'
import aboutImg from "./image/loveth.jpg"


function About(){
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
        <div className="about component__space" id="About">

            <div className="container">

                <div className="row">

                    <div className="col__2">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>

                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Hello, I am Love Okum, and I am a Software Engineer. I have worked on a wide variety of projects that have allowed me to put what I’ve learnt in School and during my personal development into use in a practical sense.
                                I am part of a tech community that has helped me in improving my skills and given me the opportunity to interact with fellow developers and it is really exciting to see the portfolio grow.
                            </p>
                            <p className="about__text p__color">
                                I have good knowledge and understanding of programming languages such as Java, Python, Javascript  and also a good understanding of Frameworks such as Springboot, Django, Flask, React.
                                I am also familiar with some Atlassian Tools like Jira and Confluence.I pride myself on being detail-oriented, analytical, and driven.
                                I have the ability to create back-end code that will add utility to everything the front-end designer creates.
                            </p>
                            <p className="about__text p__color">
                                I’m passionate about the impact my skills can have in the real world, and firmly believe that I can create innovative solutions to business processes and problems which will ultimately lead to a better user experience.
                                My ambition is to reach the very top of my profession and to work with other leading developers in this field. On a personal level I am able to both give and take feedback. Furthermore I am committed to constantly improving myself by learning new technologies and frameworks.
                            </p>

                            <div className="about__button d__flex align__items__center">
                                <a href="#"> <button className="about btn pointer"> Download CV</button></a>
                                <a href="#Contact"> <button className="about btn pointer"> Hire Me</button></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="up__to__top__btn">
                    <a href="#" className="bottom__to__top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-up white"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default About;