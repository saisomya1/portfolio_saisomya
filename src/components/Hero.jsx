import React from 'react';
import profilePic from '../assets/sai_somya_portfolio_picture.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-grid">
                    {/* LEFT – text content */}
                    <div className="hero-content anim-up">
                        <div className="hero-tag">
                            <span className="dot"></span>
                            1+ Years Experience
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm{' '}
                            <span className="text-gradient">Sai Somya</span>
                            <br />
                            Android Developer
                        </h1>

                        <p className="hero-desc">
                            I craft high-performance, visually stunning Android applications.
                            Specialized in building scalable architectures using Kotlin,
                            Jetpack, and Clean Architecture principles to deliver seamless
                            user experiences.
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary">
                                View Projects
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>

                            <div className="social-icons">
                                <a href="https://github.com/saisomya1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77S18.73.677 16 2.507a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 4.807a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" /><path d="M9 18.027c-5 1.5-5-2.5-7-3" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/sai-somya-ranjan-pati-b307252b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>
                                <a href="mailto:saisomya1@gmail.com" aria-label="Email">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – profile image */}
                    <div className="hero-image anim-up d2">
                        <div className="profile-wrapper">
                            <div className="profile-card glass">
                               <img
                                 src={profilePic}
                                 alt="Sai Somya – Android Developer"
                                 className="profile-image"
                                />
                                <div className="neon-line cyan"></div>
                                <div className="neon-line purple"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
