import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100">
                <div className="container">
                    <div className="saas-section-title">
                        <h2>Get in Touch</h2>
                        <div className="bar"></div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="contact-form">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-info-box">
                                    <p>Our 24/7 support team is here to help you and make sure our product is up to date.</p>

                                    <span>Would love to hear from you. Call us directly at:
                                        <a href="tel:2242288475">(224) 228-8475</a>
                                    </span>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" required={true} data-error="Please enter your name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" required={true} data-error="Please enter your email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea className="form-control" cols="30" rows="4" required={true} data-error="Write your message" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
