import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact-grid">
                    {/* LEFT */}
                    <div>
                        <div className="contact-heading">
                            <h3>Let's build something</h3>
                            <h3 className="text-gradient">extraordinary.</h3>
                        </div>

                        <div className="contact-details">
                            <div className="contact-row">
                                <div className="icon-box glass">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <div className="contact-label">Email Me</div>
                                    <div className="contact-value">sai.somya@example.com</div>
                                </div>
                            </div>

                            <div className="contact-row">
                                <div className="icon-box glass">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-value">Bangalore, India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – form */}
                    <div className="contact-form-card glass">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input id="name" type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn-primary submit-btn">
                                Send Message
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="m22 2-11 11" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
