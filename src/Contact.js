import React from "react";
import './Contact.css'
import hire from "./image/hireme3.jpg"

function Contact(){
    return(
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">I am available for freelance, contract and remote work. Contact with me via phone:</p>
                            <p className="hire__text white"><strong>+2347068384443</strong> or email <strong>lovieokum@gmail.com</strong></p>
                        </div>

                        <div className="input__box">
                            <input type="text" className="contact name" placeholder="Your name *"/>
                            <input type="text" className="contact email" placeholder="Your email *"/>
                            <input type="text" className="contact subject" placeholder="Write a subject"/>
                            <textarea name="message" id="message" placeholder="Write Your message"/>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>

                    </div>
                </div>
                <div className="col__2">
                    <img src={hire} alt="" className="contact__image" />
                </div>
            </div>
        </div>
    )
}

export default Contact