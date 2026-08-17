const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Base Colors
css = css.replace(/#F0F2F8/g, 'transparent'); // Set base bg to transparent so 3D background shows
css = css.replace(/rgba\(240, 242, 248, 0\.88\)/g, 'rgba(11, 15, 25, 0.88)'); // Navbar scrolled bg
css = css.replace(/#1E293B/g, '#F8FAFC'); // Main text
css = css.replace(/rgba\(30, 41, 59,/g, 'rgba(248, 250, 252,');
css = css.replace(/#6B7280/g, '#94A3B8'); // Secondary text
css = css.replace(/rgba\(107, 114, 128,/g, 'rgba(148, 163, 184,');

// Primary Accent (Blue -> Android Green)
css = css.replace(/#0B57D0/g, '#3DDC84'); 
css = css.replace(/#0949b2/g, '#2db86a'); // Darker hover state
css = css.replace(/rgba\(11, 87, 208,/g, 'rgba(61, 220, 132,');

// Glass effects (White -> Dark Navy)
css = css.replace(/rgba\(255, 255, 255, 0\.72\)/g, 'rgba(11, 15, 25, 0.72)');
css = css.replace(/rgba\(255, 255, 255, 0\.65\)/g, 'rgba(11, 15, 25, 0.65)');
css = css.replace(/rgba\(255, 255, 255, 0\.6\)/g, 'rgba(255, 255, 255, 0.1)'); // Borders
css = css.replace(/rgba\(255, 255, 255, 0\.45\)/g, 'rgba(255, 255, 255, 0.1)');
css = css.replace(/rgba\(255, 255, 255, 0\.4\)/g, 'rgba(255, 255, 255, 0.1)');
css = css.replace(/rgba\(255, 255, 255, 0\.95\)/g, 'rgba(11, 15, 25, 0.95)');
css = css.replace(/background: #fff;/g, 'background: rgba(11, 15, 25, 0.9);');
css = css.replace(/background: #ffffff;/g, 'background: #3DDC84; color: #0B0F19;'); // For primary buttons

// Text Gradient (Blue to Purple -> Green to Cyan)
css = css.replace(/#9D4EDD/g, '#00F5FF');
css = css.replace(/rgba\(157, 78, 221,/g, 'rgba(0, 245, 255,');

fs.writeFileSync('src/index.css', css);
console.log('CSS updated successfully!');
