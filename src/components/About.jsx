import React from 'react';

const About = () => {
    const highlights = [
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
            ),
            title: 'Modern Tech Stack',
            desc: 'Proficient in Kotlin & Java using modern Jetpack Compose, Hilt, and Coroutines.',
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
            ),
            title: 'Clean Architecture',
            desc: 'Advocate for scalable MVVM & MVI coding standards with separation of concerns.',
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
            ),
            title: 'REST APIs & Firebase',
            desc: 'Seamless network operations via Retrofit, OkHttp, and real-time Firebase backends.',
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
            ),
            title: 'Secure Transactions',
            desc: 'Deep security handling with custom payment gateways and encrypted storage.',
        },
    ];

    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">
                    {/* LEFT */}
                    <div className="about-left">
                        <p className="section-subtitle">About Me</p>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            Crafting Excellence
                        </h2>
                        <p className="about-desc">
                            My approach focuses on creating robust, scalable, and user-centric
                            mobile solutions. I believe in clean code, intuitive design, and
                            delivering seamless experiences across every device.
                        </p>
                        <div className="stats-row">
                            <div className="stat-item">
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Projects Done</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">2+</div>
                                <div className="stat-label">Years Exp</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="highlight-grid">
                        {highlights.map((item, i) => (
                            <div key={i} className="highlight-card glass">
                                <div className="highlight-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
