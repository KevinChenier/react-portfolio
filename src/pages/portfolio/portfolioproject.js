import React from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, projectsTimeline } from "../../content_option";
import { Link } from "react-router-dom";
import { socialprofils } from "../../content_option";
import {
    FaGithub,
  } from "react-icons/fa";

export const PortfolioProject = (projectIndex) => {
    const projectData = dataportfolio[projectIndex];
    const currentIndex = projectsTimeline.indexOf(location.pathname);
    const previousIndex = (currentIndex - 1 + projectsTimeline.length) % projectsTimeline.length;
    const nextIndex = (currentIndex + 1) % projectsTimeline.length;
    return (
        <HelmetProvider>
        <Container className="About-header">
            <Helmet>
            <meta charSet="utf-8" />
            <title> {projectData.title} | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
            </Helmet>
            <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> {projectData.title}  </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            </Row>
            <div className="mb-5 po_items_ho video-container">
            <div className="video-responsive">
                <iframe
                    className='video-frame'
                    src={projectData.youtube}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowfullscreen
                ></iframe>
                {projectData.githubLink !== "" && (
                    <p className="mb-0">
                        <a href={projectData.githubLink} target="_blank">
                            View Code<FaGithub />
                        </a>
                    </p>
                )}
            </div>
            <div className="text-container">
                <h2>Context</h2>
                <p className="mb-5">{projectData.context}</p>
                <h2>Challenges</h2>
                <p className="mb-0">{projectData.challenges}</p>
            </div>
            </div>
            
            <div className="text-container">
            <h2>Results</h2>
                <p className="mb-5">{projectData.results}</p>
                <div className="text-columns">
                    <div className="mb-5 column">
                    <h2>Notable features</h2>
                    <ul className="bullet-list">
                        {projectData.features.map((feature) => (
                        <li>{feature}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="column">
                        <h2>Tech Stack</h2>
                        <div className="image-grid">
                        {projectData.technologies.map((technology) => (
                            <div className="grid-cell">
                            <img src={technology.link} />
                            <div className="logotxt_portfolio">
                                <p>{technology.title}</p>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <div className="arrow-container left">
        <Link to={projectsTimeline[previousIndex]} className="arrow-link">
                <i className="arrow left-arrow"></i>
            </Link>
        </div>
        {/* Right arrow */}
        <div className="arrow-container right">
            <Link to={projectsTimeline[nextIndex]} className="arrow-link">
                <i className="arrow right-arrow"></i>
            </Link>
        </div>
        </HelmetProvider>
    );
};
