import React from 'react';
import './Home.css'


function Home(){

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
    });

    return (
        <div className="home" id="Home">
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30">
                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                            <a href="#About"><li className="nav__items mx__15">About</li></a>
                            <a href="#Services"><li className="nav__items mx__15">Services</li></a>
                            <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
                            <a href="#Blog"><li className="nav__items mx__15">Blog</li></a>
                            <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="home__content">

                        <div className="home__meta">
                            <h1 className="home__text pz__10">
                                WELCOME TO MY WORLD
                            </h1>

                            <h2 className="home__text pz__10">
                                Hi, I'm Love Okum
                            </h2>

                            <h3 className="home__text sweet">
                                Software Engineer
                            </h3>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;