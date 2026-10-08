import React, { useState } from 'react';
import classes from '../Tables/Tables.module.scss';
import { Picturies } from "../../../../assets/Fhoto.js";

const jobIcons = [
    Picturies.Careers1,
    Picturies.Careers2,
    Picturies.Careers3,
];

function formatDate(date) {
    if (!date) return 'Not specified';

    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function Tables({ job }) {
    const [showMore, setShowMore] = useState(false);

    if (!job) return null;

    return (
        <div className={classes.container}>
            <div className={classes.table}>
                <div className={classes.conttext}>
                    <div className={classes.Title}>
                        <div className={classes.hyi}>
                            <img
                                src={Picturies.S3card1}
                                alt={job.title}
                            />

                            <div className={classes.conthui}>
                                <p>{job.title}</p>
                                <p>{job.location}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="my-button"
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                            <img src={Picturies.Arrowbut} alt="" />
                        </button>
                    </div>

                    <div className={classes.bot}>
                        <div className={classes.bot1}>
                            <img src={jobIcons[0]} alt="" />
                            <p>Experience - {job.experience}</p>
                        </div>

                        <div className={classes.bot1}>
                            <img src={jobIcons[1]} alt="" />
                            <p>Education - {job.education}</p>
                        </div>

                        <div className={classes.bot1}>
                            <img src={jobIcons[2]} alt="" />
                            <p>Skills - {job.skills}</p>
                        </div>
                    </div>
                </div>
            </div>

            {showMore && (
                <div className={classes.hiddenblock}>
                    <div className={classes.text}>
                        <p>Job Description</p>
                        <p>{job.description}</p>

                        {job.deadline && (
                            <p>
                                Application Deadline: {formatDate(job.deadline)}
                            </p>
                        )}
                    </div>

                    <div className={classes.cat}>
                        <p>Responsibilities</p>

                        <ul>
                            {job.responsibilities?.map((responsibility) => (
                                <li key={responsibility}>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tables;
