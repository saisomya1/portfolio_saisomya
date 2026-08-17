import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

const AnimatedScene = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Subtle constant forward/rotation movement for the entire scene
            groupRef.current.rotation.y -= delta * 0.05;
            groupRef.current.rotation.x -= delta * 0.02;

            // Mouse parallax effect for added 3D depth
            const targetX = (state.mouse.x * Math.PI) / 10;
            const targetY = (state.mouse.y * Math.PI) / 10;
            
            groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
            groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Deep background twinkling stars */}
            <Stars 
                radius={50} 
                depth={50} 
                count={isMobile() ? 1500 : 4000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1.5} 
            />
            
            {/* Closer, larger glowing particles representing data nodes */}
            <Sparkles 
                count={isMobile() ? 100 : 300} 
                scale={15} 
                size={4} 
                speed={0.4} 
                opacity={0.8}
                color="#3DDC84" /* Android Green */
            />
            
            {/* Secondary accent particles */}
            <Sparkles 
                count={isMobile() ? 50 : 150} 
                scale={12} 
                size={3} 
                speed={0.2} 
                opacity={0.6}
                color="#00F5FF" /* Cyan secondary glow */
            />
        </group>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: '#0B0F19' // Dark navy / black background
        }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <AnimatedScene />
            </Canvas>
        </div>
    );
};

// Simple mobile detection for performance
const isMobile = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
    }
    return false;
};

export default ThreeBackground;
