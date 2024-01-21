import React, { useState  } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import '../../timeline/dist/css/timeline.min.css'; 
import "./style.css";


function PortfolioItem({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Determine the timeline item class based on the index
  const timelineItemClass = index % 2 === 0 ? "timeline__item  timeline__item--left" : "timeline__item  timeline__item--right";

  return (
    <div className={timelineItemClass}>
          <div className="timeline__content ">
            <a href={data.link} className="po_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="image-container">
                <img src={isHovered ? data.img : data.bw_image} alt="" />
              </div>
                <div className="content">
                  <p>{data.description}</p>
                  <a className="mb-1">View Project</a>
                    {data.githubLink !== "" && (
                      <p className="mb-0">
                        <a href={data.githubLink} target="_blank">
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
        <div className="timeline timeline--loaded" id="timeline-horizontal">
          <div className="timeline__wrap">
            <div className="timeline__items">
              {dataportfolio.map((data, i) => (
                <PortfolioItem key={i} data={data} index={i}/>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};