import React from 'react';

const experiences = [
    {
        role: 'Senior Android Engineer',
        company: 'TechCorp Solutions',
        period: '2022 – Present',
        side: 'left',
        details: [
            'Led checkout latency optimizations reducing drop-offs by 15%',
            'Architected robust payment modules for multi-country support',
            'Mentored junior developers and defined team best-practices',
        ],
    },
    {
        role: 'Android Developer',
        company: 'Innovation Labs',
        period: '2021 – 2022',
        side: 'right',
        details: [
            'Migrated legacy codebase to MVVM + Kotlin Coroutines',
            'Integrated real-time sync using Firebase Firestore',
            'Collaborated with UI/UX team for pixel-perfect implementations',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-header">
                    <p className="section-subtitle">Career</p>
                    <h2 className="section-title">Professional Journey</h2>
                    <div className="blue-bar"></div>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, i) => (
                        <div key={i} className={`timeline-item ${exp.side}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass">
                                <span className="period">{exp.period}</span>
                                <div className="role">{exp.role}</div>
                                <div className="company">{exp.company}</div>
                                <ul>
                                    {exp.details.map((d, j) => (
                                        <li key={j}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
