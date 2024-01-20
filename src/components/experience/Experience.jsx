import React from "react"
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Technical Skills</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Professional</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Professional</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Git and Github</h4>
                                <small className="text-light">professional</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* End of Frontend */}

                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Professional</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Oracle SQL</h4>
                                <small className="text-light">Professional</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Hibernate</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Oracle APEX</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience