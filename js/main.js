/* CSS Variables */
:root {
    --primary - color: #1a365d;
    --secondary - color: #3182ce;
    --accent - color: #63b3ed;
    --text - color: #2d3748;
    --bg - color: #f7fafc;
    --white: #ffffff;
    --gray - light: #e2e8f0;
    --gray - medium: #a0aec0;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box- sizing: border - box;
}

body {
    font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans - serif;
    line - height: 1.6;
    color: var(--text - color);
    background - color: var(--bg - color);
}

/* Navigation */
nav {
    background - color: var(--white);
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z - index: 1000;
}

.nav - container {
    max - width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify - content: space - between;
    align - items: center;
}

.nav - brand {
    font - size: 1.5rem;
    font - weight: 700;
    color: var(--primary - color);
    text - decoration: none;
}

.nav - links {
    display: flex;
    list - style: none;
    gap: 2rem;
}

.nav - links a {
    text - decoration: none;
    color: var(--text - color);
    font - weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
}

.nav - links a: hover,
.nav - links a.active {
    color: var(--secondary - color);
}

/* Mobile menu */
.menu - toggle {
    display: none;
    background: none;
    border: none;
    font - size: 1.5rem;
    cursor: pointer;
    color: var(--primary - color);
}

/* Main Content */
.container {
    max - width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.section {
    display: none;
    animation: fadeIn 0.5s ease -in -out;
}

.section.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Hero Section */
.hero {
    background: linear - gradient(135deg, var(--primary - color), var(--secondary - color));
    color: var(--white);
    padding: 4rem 0;
    text - align: center;
    border - radius: 10px;
    margin - bottom: 3rem;
}

.hero h1 {
    font - size: 3rem;
    margin - bottom: 1rem;
}

.hero.subtitle {
    font - size: 1.5rem;
    opacity: 0.9;
}

/* About Section */
.about - content {
    display: grid;
    grid - template - columns: 1fr 2fr;
    gap: 3rem;
    align - items: start;
}

.profile - card {
    background: var(--white);
    padding: 2rem;
    border - radius: 10px;
    box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text - align: center;
}

.profile - img {
    width: 200px;
    height: 200px;
    border - radius: 50 %;
    background: var(--gray - light);
    margin: 0 auto 2rem;
    display: flex;
    align - items: center;
    justify - content: center;
    font - size: 4rem;
    color: var(--gray - medium);
}

.contact - info {
    text - align: left;
    margin - top: 2rem;
}

.contact - info p {
    margin: 0.5rem 0;
    display: flex;
    align - items: center;
    gap: 0.5rem;
}

.contact - info a {
    color: var(--secondary - color);
    text - decoration: none;
}

.contact - info a:hover {
    text - decoration: underline;
}

.about - text {
    background: var(--white);
    padding: 2rem;
    border - radius: 10px;
    box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about - text h2 {
    color: var(--primary - color);
    margin - bottom: 1rem;
}

.about - text p {
    margin - bottom: 1rem;
}

/* Publications */
.publication - item {
    background: var(--white);
    padding: 1.5rem;
    margin - bottom: 1rem;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.publication - item:hover {
    transform: translateY(-2px);
    box - shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.publication - item h3 {
    color: var(--primary - color);
    margin - bottom: 0.5rem;
}

.publication - meta {
    color: var(--gray - medium);
    font - size: 0.9rem;
    margin - bottom: 0.5rem;
}

.publication - type {
    display: inline - block;
    background: var(--accent - color);
    color: var(--white);
    padding: 0.2rem 0.8rem;
    border - radius: 20px;
    font - size: 0.8rem;
    margin - top: 0.5rem;
}

.publication - links {
    margin - top: 1rem;
    display: flex;
    gap: 1rem;
}

.publication - links a {
    color: var(--secondary - color);
    text - decoration: none;
    font - size: 0.9rem;
    display: flex;
    align - items: center;
    gap: 0.3rem;
}

.publication - links a:hover {
    text - decoration: underline;
}

/* Lectures & Presentations */
.course - grid {
    display: grid;
    grid - template - columns: repeat(auto - fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin - top: 2rem;
}

.course - card {
    background: var(--white);
    padding: 1.5rem;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.course - card:hover {
    transform: translateY(-2px);
    box - shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.course - card h3 {
    color: var(--primary - color);
    margin - bottom: 0.5rem;
}

.course - meta {
    color: var(--gray - medium);
    font - size: 0.9rem;
}

/* Musings */
.musing - post {
    background: var(--white);
    padding: 2rem;
    margin - bottom: 2rem;
    border - radius: 8px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.musing - post h3 {
    color: var(--primary - color);
    margin - bottom: 0.5rem;
}

.musing - date {
    color: var(--gray - medium);
    font - size: 0.9rem;
    margin - bottom: 1rem;
}

.read - more {
    color: var(--secondary - color);
    text - decoration: none;
    font - weight: 500;
}

.read - more:hover {
    text - decoration: underline;
}

/* Footer */
footer {
    background - color: var(--primary - color);
    color: var(--white);
    text - align: center;
    padding: 2rem;
    margin - top: 4rem;
}

/* Responsive Design */
@media(max - width: 768px) {
    .nav - links {
        position: fixed;
        top: 70px;
        right: -100 %;
        width: 100 %;
        height: calc(100vh - 70px);
        background: var(--white);
        flex - direction: column;
        padding: 2rem;
        transition: right 0.3s ease;
        box - shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
    }

    .nav - links.show {
        right: 0;
    }

    .menu - toggle {
        display: block;
    }

    .hero h1 {
        font - size: 2rem;
    }

    .hero.subtitle {
        font - size: 1.2rem;
    }

    .about - content {
        grid - template - columns: 1fr;
    }

    .course - grid {
        grid - template - columns: 1fr;
    }

    .publication - links {
        flex - direction: column;
    }
}