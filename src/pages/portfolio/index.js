import React, { useState } from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {
  FaGithub,
} from "react-icons/fa";

function PortfolioItem({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={data.link} className="po_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="image-container">
        <img src={isHovered ? data.img : data.bw_image} alt="" />
      </div>
      <div className="content">
        <p>{data.description}</p>
        <a className="mb-1">View Project</a>
        {data.githubLink !== "" && (
          <p className="mb-0">
              <a href={data.githubLink}  target="_blank">
                View Code<FaGithub />
              </a>
          </p>
        )}
      </div>
    </a>
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
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <PortfolioItem key={i} data={data} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
