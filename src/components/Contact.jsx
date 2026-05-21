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
                                    <a
                                        href="mailto:saisomya1@gmail.com"
                                        className="contact-value"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        saisomya1@gmail.com
                                    </a>
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

                            <div className="contact-row">
                                <div className="icon-box glass">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77S18.73.677 16 2.507a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 4.807a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" /><path d="M9 18.027c-5 1.5-5-2.5-7-3" /></svg>
                                </div>
                                <div>
                                    <div className="contact-label">GitHub</div>
                                    <a
                                        href="https://github.com/saisomya1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-value"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        github.com/saisomya1
                                    </a>
                                </div>
                            </div>

                            <div className="contact-row">
                                <div className="icon-box glass">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </div>
                                <div>
                                    <div className="contact-label">LinkedIn</div>
                                    <a
                                        href="https://www.linkedin.com/in/sai-somya-ranjan-pati-b307252b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-value"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        Sai Somya Ranjan Pati
                                    </a>
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
