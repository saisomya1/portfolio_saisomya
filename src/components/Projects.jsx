import React from 'react';

const projects = [
    {
        title: 'Expense Splitter',
        tags: ['Kotlin', 'MVVM', 'Room DB'],
        desc: 'Comprehensive bill tracking and debt management app with smart split algorithms and group expense support.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></svg>
        ),
    },
    {
        title: 'Firebase Auth Pro',
        tags: ['Firebase', 'Coroutines', 'EncryptedPrefs'],
        desc: 'Secure multi-factor authentication system with biometric login and encrypted shared preferences.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
        ),
    },
    {
        title: 'Safety Form Automator',
        tags: ['Dagger Hilt', 'WorkManager', 'Offline-First'],
        desc: 'Industrial safety reporting app with offline-capable form submission and background sync workers.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14,2 14,8 20,8" /></svg>
        ),
    },
    {
        title: 'PDF Generator Core',
        tags: ['Canvas API', 'FileProvider', 'Custom Layouts'],
        desc: 'Customizable layout-to-PDF module for generating professional invoices and printable reports.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"><path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" /><path d="M9 13h6" /><path d="M9 17h3" /></svg>
        ),
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="projects-header">
                    <div>
                        <p className="section-subtitle">My Work</p>
                        <h2 className="section-title">Featured Projects</h2>
                    </div>
                    <a href="#">
                        View Archive
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card glass">
                            <div className="project-thumb">{p.icon}</div>
                            <div className="project-body">
                                <div className="project-tags">
                                    {p.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <h4>{p.title}</h4>
                                <p>{p.desc}</p>
                                <div className="project-links">
                                    <a href="#" className="live">
                                        Live Demo
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </a>
                                    <a href="#" className="github">
                                        GitHub
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77S18.73.677 16 2.507a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 4.807a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" /><path d="M9 18.027c-5 1.5-5-2.5-7-3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
