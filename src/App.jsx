import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <div className="mesh-bg" />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <footer className="footer">
                <div className="container">
                    <p>© 2026 Sai Somya. Built with ❤️ for Android.</p>
                </div>
            </footer>
        </>
    );
}

export default App;
