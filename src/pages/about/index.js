import React, { useState } from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  aboutDocuments
} from "../../content_option";

export const About = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (e) => {
    const image = e.target;
    setEnlargedImage(image.src);
  };

  const handleCloseClick = () => {
    setEnlargedImage(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <div className="fixed-menu">
            {aboutDocuments.map((document) => (
                <div className='imageContainer'>
                  <div className="text-container-about">
                    <p>{document.title}</p>
                  </div>
                  <img
                    src={document.link}
                    className="menu-image"
                    onClick={handleImageClick}
                  />
                </div>
            ))}
          </div>
        </Row>
        {enlargedImage && (
          <div className="enlarged-image" onClick={handleCloseClick}>
            <img src={enlargedImage} alt="Enlarged" />
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
