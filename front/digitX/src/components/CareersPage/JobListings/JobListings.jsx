import { Picturies } from "../../../assets/Fhoto.js";
import classes from "../JobListings/JobListings.module.scss";
import React, { useEffect, useState } from "react";
import Tables from "./Tables/Tables.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Job() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const response = await fetch(`${API_URL}/api/jobs`);

                if (!response.ok) {
                    throw new Error("Failed to load jobs");
                }

                const data = await response.json();
                setJobs(data);
            } catch (err) {
                console.error(err);
                setError("Unable to load job listings.");
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);

    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.containerText}>
                    <p>
                        Job Listings <span>at DigitX</span>
                    </p>

                    <p>
                        Explore our current job listings to discover exciting career
                        opportunities that match your skill set and interests. We offer
                        positions in various digital disciplines, including web design,
                        mobile app development, digital marketing, project management,
                        and more. Each job listing provides comprehensive details about
                        the role, responsibilities, qualifications, and benefits.
                        Whether you are an experienced professional or a fresh graduate,
                        we welcome talent from all backgrounds to join our team.
                    </p>
                </div>

                {loading && <p>Loading job listings...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && (
                    <div className={classes.containerText2}>
                        {jobs.map((job) => (
                            <Tables key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Job;
