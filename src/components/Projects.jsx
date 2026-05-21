import React from 'react';
import tankSpotterImg from '../assets/tank_spotter.png';
import royalPapersImg from '../assets/royal_papers.png';
import blinkFuelImg from '../assets/blink_fuel.png';
import kharchaMateImg from '../assets/kharcha_mate.png';

const projects = [
    {
        title: 'Tank Spotter',
        image: tankSpotterImg,
        desc: 'Android app for fuel/tank-related tracking and management.',
        tags: ['Kotlin', 'MVVM', 'Retrofit', 'SQLite', 'Firebase'],
        playStore: 'https://play.google.com/store/apps/details?id=com.apps.tankspotter.tank',
        github: 'Private Repository',
    },
    {
        title: 'Royal Papers',
        image: royalPapersImg,
        desc: 'Android application for paper and business-related workflows.',
        tags: ['Kotlin', 'Java', 'REST API', 'Room Database'],
        playStore: 'https://play.google.com/store/apps/details?id=com.royal.papers',
        github: 'Private Repository',
    },
    {
        title: 'Blink Fuel',
        image: blinkFuelImg,
        desc: 'Fuel management Android app with scalable architecture and API integrations.',
        tags: ['Kotlin', 'Clean Architecture', 'Retrofit', 'SQLite'],
        playStore: 'https://play.google.com/store/apps/details?id=com.anviam.blinkfuel',
        github: 'Private Repository',
    },
    {
        title: 'KharchaMate',
        image: kharchaMateImg,
        desc: 'Expense splitting and expense tracking Android application for managing group expenses and personal spending.',
        tags: ['Kotlin', 'Room Database', 'MVVM', 'Firebase'],
        playStore: null,
        github: 'https://github.com/saisomya1/KharchaMate',
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
                </div>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card glass">
                            <div className="project-thumb">
                                <img src={p.image} alt={p.title} className="project-img" />
                                <div className="project-overlay"></div>
                            </div>
                            <div className="project-body">
                                <div className="project-tags">
                                    {p.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <h4>{p.title}</h4>
                                <p>{p.desc}</p>
                                <div className="project-links">
                                    {p.playStore && (
                                        <a href={p.playStore} target="_blank" rel="noopener noreferrer" className="live playstore-btn">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                                                <path d="M5 3.024a1.996 1.996 0 0 0-1.127.362l11.966 11.966 3.238-3.238L5 3.024zM3.109 4.887A2 2 0 0 0 3 5.4v13.2a2 2 0 0 0 .109.513L10.366 12 3.109 4.887zm11.966 8.727L3.873 20.614a1.99 1.99 0 0 0 1.127.362l14.077-9.076-4.005-4.006zM15.805 12l4.316-2.5a1.99 1.99 0 0 1 0 3.488L15.805 12z" />
                                            </svg>
                                            Play Store
                                        </a>
                                    )}
                                    {p.github === 'Private Repository' ? (
                                        <span className="github private-repo">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                            Private Repo
                                        </span>
                                    ) : (
                                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="github public-repo">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
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
