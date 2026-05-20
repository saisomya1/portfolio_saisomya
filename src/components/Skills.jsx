import React from 'react';

const skills = [
    { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Jetpack', icon: 'devicon-android-plain' },
    { name: 'MVVM', shortcut: 'M' },
    { name: 'Retrofit', shortcut: 'R' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Room DB', shortcut: 'DB' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Dagger Hilt', shortcut: 'DH' },
    { name: 'Coroutines', shortcut: 'Co' },
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">
                    <p className="section-subtitle">What I Use</p>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="blue-bar"></div>
                </div>

                <div className="skills-grid">
                    {skills.map((s, i) => (
                        <div key={i} className="skill-card glass">
                            <div className="skill-icon">
                                {s.icon ? (
                                    <i className={s.icon}></i>
                                ) : (
                                    <span style={{
                                        fontWeight: 800,
                                        fontSize: '1.6rem',
                                        color: '#0B57D0',
                                        fontFamily: 'monospace',
                                    }}>
                                        {s.shortcut}
                                    </span>
                                )}
                            </div>
                            <div className="skill-name">{s.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
