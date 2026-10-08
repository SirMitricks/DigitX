import { Picturies } from "../../../assets/Fhoto.js";
import classes from "../ProjectsShowcase/ProjectsShowcase.module.scss";
import React, { useEffect, useState } from "react";
import Table from "./table.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function ProjectsShowcase() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await fetch(`${API_URL}/api/projects`);

                if (!response.ok) {
                    throw new Error("Failed to load projects");
                }

                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error(err);
                setError("Unable to load projects.");
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    return (
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p>
                        Key Features <span>of Our Projects</span>
                    </p>
                    <p>
                        At DigitX, we are committed to providing exceptional digital
                        solutions tailored to suit your unique business needs. Our
                        comprehensive service offerings cover a wide spectrum of digital
                        disciplines, including web design, app development, web
                        development, and marketing.
                    </p>
                </div>

                {loading && <p>Loading projects...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && (
                    <div>
                        {projects.map((project) => (
                            <Table key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default ProjectsShowcase;
