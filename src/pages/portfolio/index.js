import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import "./style.css";
import '../../timeline/dist/css/timeline.min.css'; 


function PortfolioItem({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Determine the timeline item class based on the index
  const timelineItemClass = index % 2 === 0 ? "timeline__item animated timeline__item--left fadeIn" : "timeline__item animated timeline__item--right fadeIn";

  return (
    <div className={timelineItemClass}>
          <div className="timeline__content ">
            <a href={data.link} className="po_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="image-container">
                <img src={isHovered ? data.img : data.bw_image} alt="" />
              </div>
                <div className="content">
                  <p className="paragraph">{data.description}</p>
                  <a className="mb-2 boxText">View Project</a>
                    {data.githubLink !== "" && (
                      <p className="mb-0">
                        <a className="boxText" href={data.githubLink} target="_blank">
                          View Code<FaGithub />
                        </a>
                      </p>
                    )}
                </div>
            </a>
          </div>
    </div>
  );
}

export const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timelineClass = isMobile ? "timeline timeline--mobile" : "timeline timeline--loaded";


  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <h1 className="display-5 mb-4"> Select the ones that interest you!</h1>{" "}
        </Row>
        <div className={timelineClass} id="timeline-vertical">
          <div className="timeline__wrap" >
            <div className="timeline__items" >
            <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2024
                  </div>
              </div>
            {dataportfolio.slice(0, 2).map((data, i) => (
                  <PortfolioItem key={i} data={data} index={i+1}/>
                ))}
            <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2023
                  </div>
              </div>
            {dataportfolio.slice(2, 4).map((data, i) => (
                  <PortfolioItem key={i} data={data} index={i+1}/>
                ))}
            <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2022
                  </div>
              </div>
            {dataportfolio.slice(4, 7).map((data, i) => (
                  <PortfolioItem key={i} data={data} index={i+1}/>
                ))}
            <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2021
                  </div>
              </div>
              {dataportfolio.slice(7, 9).map((data, i) => (
                  <PortfolioItem key={i} data={data} index={i}/>
                ))}
              <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2020
                  </div>
              </div>
              {dataportfolio.slice(9, 11).map((data, i) => (
                <PortfolioItem key={i} data={data} index={i}/>
              ))}
              <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2019
                  </div>
              </div>
              {dataportfolio.slice(11, 13).map((data, i) => (
                <PortfolioItem key={i} data={data} index={i}/>
              ))}
              <div className="timeline__item animated fadeIn">
                  <div className="date_item">
                      2018
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};