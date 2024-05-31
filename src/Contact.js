/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import emailjs from '@emailjs/browser';


import './Contact.css'

const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(`gmail`, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
        },
            (error) => {
                alert("An error occurred, Please try again", error.text);
            });
};
function Contact(){
    return(
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">I am available for freelance, contract and remote work. Contact with me via phone: <strong>+491701691370</strong></p>
                            <p className="hire__text white">and email: <strong>lovieokum@gmail.com, Loveokum427@gmail.com</strong></p>
                        </div>

                        <div className="input__box" onSubmit={handleSubmit}>
                            <input type="text" className="contact name" placeholder="Your name *"/>
                            <input type="text" className="contact email" placeholder="Your email *"/>
                            <input type="text" className="contact subject" placeholder="Write a subject"/>
                            <textarea name="message" id="message" placeholder="Write Your message"/>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>

                    </div>
             
                </div>
                    
            </div>
        </div>
    )
}

export default Contact