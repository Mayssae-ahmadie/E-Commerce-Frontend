import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/footer.css';
import { Link } from 'react-router-dom';
import facebook from "../images/facebook-icon.png"
import instagram from "../images/instagram-icon.png"
import linkedin from "../images/linkedin-icon.png"
import footerimage from "../images/Footer-image.png"

function Footer() {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
                setFormData({})
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    document.addEventListener('DOMContentLoaded', function () {
        const currentYear = new Date().getFullYear();
        document.getElementById('copyright').innerText = `© ${currentYear} All rights reserved`;
    });

    return (
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-column">
                    <img className="footer-image" src={footerimage} alt="" />
                </div>
                <div className="footer-column">
                    <div className="footer-contact">
                        <h2 className="footer-header">Get in touch</h2>
                        <form method="post" className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <div className="input-container">
                                    <label htmlFor="name" className="label-contact">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        className="input-contact"
                                        placeholder="Your name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-container">
                                    <label htmlFor="email" className="label-contact">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        className="input-contact"
                                        placeholder="Your email address"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-container">
                                    <label htmlFor="message" className="label-contact">
                                        Message:
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="input-contact"
                                        placeholder="Your message"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <button className="footer-submit" type="submit" value="Submit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-social full-width">
                <div>
                    <h2 className="footer-social-header">Follow us</h2>
                </div>
                <div className="footer-social-icons">
                    <Link to="">
                        <img src={facebook} alt="" />
                    </Link>
                    <Link to="">
                        <img src={instagram} alt="" />
                    </Link>
                    <Link to="">
                        <img src={linkedin} alt="" />
                    </Link>
                </div>
            </div>
            <div className="footer-copyright">
                <p id="copyright">© 2023 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;