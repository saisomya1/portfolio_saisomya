import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveLink(entry.target.id);
                });
            },
            { threshold: 0.35 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <a href="#home" className="nav-logo">
                    <span className="text-gradient">Sai Portfolio</span>
                </a>

                <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {links.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            className={activeLink === l.id ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                <a
                    href="/Sai somya(AE 2y).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary nav-resume"
                >
                    Resume
                </a>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
