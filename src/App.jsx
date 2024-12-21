import React from 'react';
import './App.css';

const App = () => {
    const projects = [
        {
            title: 'Lamoda',
            description:
                'A platform designed for discovering fashion and lifestyle products, featuring an extensive selection of clothing, accessories, and footwear. Used: React, MUI, CSS, HTML',
            githubLink: 'https://github.com/Yanochka00/Lamoda.git',
            images: [
                { src: 'img/lamoda_2.png', alt: 'Lamoda project image', title: 'Link to Git' },
            ],
        },
        {
            title: 'Notion',
            description:
                'A versatile note-taking and organization tool that allows users to create, manage, and organize notes in a customizable workspace. Used: React, MUI, CSS, HTML',
            githubLink: 'https://github.com/Yanochka00/Notion.git',
            images: [{ src: 'img/Notion.png', alt: 'Notion project image', title: 'Link to Git' }],
        },
        {
            title: 'SPA',
            description:
                'SPA that demonstrates the use of modern web technologies to create a responsive and dynamic user interface. Used: React, MUI, CSS, HTML',
            githubLink: 'https://github.com/Yanochka00/SPA.git',
            images: [{ src: 'img/SPA.png', alt: 'SPA project image', title: 'Link to Git' }],
        },
        {
            title: 'To Do',
            description:
                'A task management application designed to help users efficiently create, organize, and track their tasks. Used: React, CSS, HTML',
            githubLink: 'https://github.com/Yanochka00/To-do.git',
            images: [{ src: 'img/to_do.png', alt: 'To Do project image', title: 'Link to Git' }],
        },
    ];

    return (
        <div className="resume">
            <header className="header">
                <div className="header-content">
                    <h1>Grigoreva Yana</h1>
                    <div className="contact-info">
                        <p>
                            <a1>Email: </a1>
                            <a class="email" href="mailto:yana100500yana@gmail.com">
                                yana100500yana@gmail.com
                            </a>
                        </p>
                        <p>
                            <a1> Telegram: </a1>
                            <a class="telegram" href="https://t.me/Yaanochka_00">
                                Yana
                            </a>
                        </p>
                        <p>
                            <a1> GitHub: </a1>
                            <a class="GitHub" href="https://github.com/Yanochka00">
                                соня
                            </a>
                        </p>
                    </div>
                </div>
                <img src="img/yana.jpg" alt="Grigoreva Yana" className="profile-photo" />
            </header>

            <section className="description">
                <h2>About Me</h2>
                <p>
                    I am learning web development and have already gained skills in creating
                    interactive applications. I have experience working with JavaScript and React. I
                    strive to improve my knowledge and skills despite all challenges. I work
                    confidently in a team and enjoy solving complex problems. My level of English
                    proficiency helps me communicate with international colleagues. I am ready for
                    new challenges and projects.
                </p>
                <p>Languages: JavaScript, HTML, CSS, C++</p>
                <p>English: B2</p>
                <p>Russian: C2</p>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>2023 - Present: Belarusian State University (BSU), studying Mobile Developer.</p>
            </section>

            <section className="projects">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <ul>
                            {project.images.map((image, imgIndex) => (
                                <li key={imgIndex}>
                                    <section className="image-section">
                                        <div className="image-container">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="small-image"
                                            />
                                            <div className="image-description">
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {image.title}
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default App;
