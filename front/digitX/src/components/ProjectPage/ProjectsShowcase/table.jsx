import React, { useState } from 'react';
import classes from './table.module.scss';
import { Picturies } from "../../../assets/Fhoto.js";

const projectImages = {
    FhotoPage4: Picturies.FhotoPage4,
};

const technologyIcons = [
    Picturies.icon1,
    Picturies.icon2,
    Picturies.icon3,
    Picturies.icon6,
];

function formatDate(date) {
    if (!date) return '—';

    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

function Table({ project }) {
    const [showMore, setShowMore] = useState(false);

    if (!project) return null;

    const image = projectImages[project.image_key] || Picturies.FhotoPage4;

    return (
        <div className={classes.container}>
            <div className={classes.table}>
                <img src={image} alt={project.title} />

                <div className={classes.conttext}>
                    <div className={classes.Title}>
                        <p>{project.title}</p>

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
                            <img src={Picturies.Icon6} alt="" />
                            <p>{project.category}</p>
                        </div>

                        <div className={classes.bot2}>
                            <img src={Picturies.Icon6} alt="" />
                            <p>Web Design & Development</p>
                        </div>
                    </div>
                </div>
            </div>

            {showMore && (
                <div className={classes.hiddenblock}>
                    <div className={classes.text}>
                        <p>Project Description</p>
                        <p>{project.description}</p>
                    </div>

                    <div className={classes.cat}>
                        <div className={classes.card1}>
                            <p>Category</p>
                            <p>{project.category}</p>
                        </div>

                        <div className={classes.card1}>
                            <p>Time Taken</p>
                            <p>{project.time_taken}</p>
                        </div>

                        <div className={classes.card1}>
                            <p>Start Date</p>
                            <p>{formatDate(project.start_date)}</p>
                        </div>

                        <div className={classes.card1}>
                            <p>Completed Date</p>
                            <p>{formatDate(project.completed_date)}</p>
                        </div>
                    </div>

                    <div className={classes.messeg}>
                        <p>Technologies Used</p>

                        {technologyIcons.slice(0, project.technologies?.length || 0).map((icon, index) => (
                            <img key={index} src={icon} alt="" />
                        ))}
                    </div>

                    <div className={classes.team}>
                        <p>Team Members</p>

                        <div className={classes.card1}>
                            {project.team_members?.map((member, index) => (
                                <div className={classes.per} key={`${member.role}-${index}`}>
                                    <p>{member.role}</p>

                                    <div className={classes.xex}>
                                        <img
                                            src={Picturies.image1}
                                            alt={member.name}
                                        />
                                        <p>{member.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={classes.met}>
                        <p>Methods Used</p>

                        <div className={classes.conttt}>
                            {project.methods?.map((method) => (
                                <p key={method}>{method}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;
