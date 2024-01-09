import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <article className="proj-imgbx">
        <img src={imgUrl} alt="image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </article>
    </Col>
  );
};

export default ProjectCard;
