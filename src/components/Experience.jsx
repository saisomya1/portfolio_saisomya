import React from 'react';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Anviam Solutions Private Limited',
        period: 'July 2024 – Present',
        side: 'left',
        details: [
            'Designed, developed, and maintained scalable Android applications using Kotlin and MVVM & MVC architecture, ensuring clean separation of concerns',
            'Integrated and managed RESTful APIs using Retrofit, handling authentication, error states, and data parsing efficiently',
            'Implemented and maintained Firebase services including Authentication, Cloud Messaging (FCM), and Analytics to support user engagement and app monitoring',
            'Proactively improved app performance and stability by debugging complex issues, reducing crash rates, and optimizing network and UI performance',
            'Worked cross-functionally with UI/UX designers, backend engineers, and product teams within an Agile/Scrum environment to deliver features end-to-end',
        ],
    },
    {
        role: 'Internship',
        company: 'Research Center of Centurion University of Technology and Management',
        period: 'Academic Internship',
        side: 'right',
        details: [
            'Study of Industrial IOT Automation',
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
