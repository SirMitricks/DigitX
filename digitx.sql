-- DigitX PostgreSQL database
-- Run this script in the database from back/.env (DB_NAME).

DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_key VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    time_taken VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    completed_date DATE NOT NULL,
    technologies TEXT[] NOT NULL DEFAULT '{}',
    team_members JSONB NOT NULL DEFAULT '[]',
    methods TEXT[] NOT NULL DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image_key VARCHAR(100) NOT NULL,
    experience TEXT NOT NULL,
    education TEXT NOT NULL,
    skills TEXT NOT NULL,
    description TEXT NOT NULL,
    deadline DATE,
    responsibilities TEXT[] NOT NULL DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (
    title,
    image_key,
    description,
    category,
    time_taken,
    start_date,
    completed_date,
    technologies,
    team_members,
    methods,
    sort_order
) VALUES (
    'E-Commerce Revolution',
    'FhotoPage4',
    'A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.',
    'E-commerce',
    '4 Months',
    '2023-01-15',
    '2023-05-15',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'JavaScript'],
    '[
        {"role": "Web Developers", "name": "Web Developers", "image_key": "image1"},
        {"role": "Web Developers", "name": "Web Developers", "image_key": "image1"},
        {"role": "Web Developers", "name": "Web Developers", "image_key": "image1"}
    ]'::jsonb,
    ARRAY['Agile Development', 'User Testing', 'A/B Testing'],
    1
);

INSERT INTO projects (
    title,
    image_key,
    description,
    category,
    time_taken,
    start_date,
    completed_date,
    technologies,
    team_members,
    methods,
    sort_order
) VALUES (
    'Digital Business Platform',
    'FhotoPage4',
    'A modern digital platform designed to help businesses improve their online presence and provide a convenient customer experience.',
    'Web Development',
    '3 Months',
    '2024-02-01',
    '2024-05-01',
    ARRAY['React', 'Express', 'PostgreSQL', 'JavaScript'],
    '[
        {"role": "Frontend Developers", "name": "Frontend Developers", "image_key": "image1"},
        {"role": "Backend Developers", "name": "Backend Developers", "image_key": "image1"}
    ]'::jsonb,
    ARRAY['Agile Development', 'User Testing'],
    2
);

INSERT INTO jobs (
    title,
    location,
    image_key,
    experience,
    education,
    skills,
    description,
    deadline,
    responsibilities,
    sort_order
) VALUES (
    'Web Designer',
    'Mumbai, India',
    'S3card1',
    'Minimum 1 year of professional web design experience.',
    'Experience with modern UI/UX design principles.',
    'Figma, responsive design, typography, UX/UI.',
    'Create visually appealing and user-friendly interfaces for DigitX digital products.',
    '2025-09-30',
    ARRAY[
        'Design and create visually appealing website layouts, graphics, and icons.',
        'Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.',
        'Conduct user research to understand user behaviors and preferences for optimized design decisions.',
        'Stay updated with industry trends and emerging design tools and techniques.',
        'Present design concepts and prototypes to internal teams and clients for feedback and approval.'
    ],
    1
);

INSERT INTO jobs (
    title,
    location,
    image_key,
    experience,
    education,
    skills,
    description,
    deadline,
    responsibilities,
    sort_order
) VALUES (
    'Frontend Developer',
    'Remote',
    'S3card1',
    'Minimum 1 year of professional frontend development experience.',
    'Experience with React and modern JavaScript.',
    'React, JavaScript, HTML, CSS, REST API.',
    'Develop responsive and maintainable interfaces for DigitX web applications.',
    NULL,
    ARRAY[
        'Build reusable React components.',
        'Integrate frontend interfaces with REST APIs.',
        'Optimize applications for performance and responsive layouts.',
        'Work with designers and backend developers.',
        'Participate in code reviews and testing.'
    ],
    2
);

INSERT INTO jobs (
    title,
    location,
    image_key,
    experience,
    education,
    skills,
    description,
    deadline,
    responsibilities,
    sort_order
) VALUES (
    'Backend Developer',
    'Remote',
    'S3card1',
    'Minimum 1 year of professional backend development experience.',
    'Experience with Node.js and PostgreSQL.',
    'Node.js, Express, PostgreSQL, REST API.',
    'Develop reliable backend services and APIs for DigitX products.',
    NULL,
    ARRAY[
        'Develop REST API endpoints with Express.',
        'Design and optimize PostgreSQL queries.',
        'Implement validation and error handling.',
        'Maintain backend integrations with frontend applications.',
        'Participate in testing and code reviews.'
    ],
    3
);

CREATE INDEX idx_projects_active_sort
    ON projects (is_active, sort_order);

CREATE INDEX idx_jobs_active_sort
    ON jobs (is_active, sort_order);
