require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
}));

app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

pool.on('error', (error) => {
    console.error('Unexpected PostgreSQL pool error:', error);
});

// Проверка backend + PostgreSQL
app.get('/api/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');

        res.json({
            status: 'ok',
            database: 'connected',
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: 'error',
            database: 'disconnected',
        });
    }
});

// Получить все проекты
app.get('/api/projects', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                id,
                title,
                image_key,
                description,
                category,
                time_taken,
                start_date,
                completed_date,
                technologies,
                team_members,
                methods
            FROM projects
            WHERE is_active = TRUE
            ORDER BY sort_order ASC, id ASC
        `);

        res.json(result.rows);
    } catch (error) {
        console.error('GET /api/projects:', error);

        res.status(500).json({
            message: 'Failed to load projects',
        });
    }
});

// Получить один проект
app.get('/api/projects/:id', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT
                id,
                title,
                image_key,
                description,
                category,
                time_taken,
                start_date,
                completed_date,
                technologies,
                team_members,
                methods
            FROM projects
            WHERE id = $1
              AND is_active = TRUE
            `,
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Project not found',
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('GET /api/projects/:id:', error);

        res.status(500).json({
            message: 'Failed to load project',
        });
    }
});

// Получить все вакансии
app.get('/api/jobs', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                id,
                title,
                location,
                image_key,
                experience,
                education,
                skills,
                description,
                deadline,
                responsibilities
            FROM jobs
            WHERE is_active = TRUE
            ORDER BY sort_order ASC, id ASC
        `);

        res.json(result.rows);
    } catch (error) {
        console.error('GET /api/jobs:', error);

        res.status(500).json({
            message: 'Failed to load jobs',
        });
    }
});

// Получить одну вакансию
app.get('/api/jobs/:id', async (req, res) => {
    try {
        const result = await pool.query(
            `
            SELECT
                id,
                title,
                location,
                image_key,
                experience,
                education,
                skills,
                description,
                deadline,
                responsibilities
            FROM jobs
            WHERE id = $1
              AND is_active = TRUE
            `,
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Job not found',
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('GET /api/jobs/:id:', error);

        res.status(500).json({
            message: 'Failed to load job',
        });
    }
});

// Неизвестный маршрут
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

app.listen(PORT, async () => {
    console.log(`DigitX backend started on http://localhost:${PORT}`);

    try {
        await pool.query('SELECT 1');
        console.log('PostgreSQL connected');
    } catch (error) {
        console.error(
            'PostgreSQL connection failed:',
            error.message
        );
    }
});