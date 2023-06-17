import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { getProjects } from '../firebase';

import '../styles/portfolio.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10%',
        },
      },
    ],
    focusOnSelect: true,
  };

  return (
    <div className="project-container">
      <h1>Portfolio</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="content">
              <img src={project.image_link} alt={project.title} />
              <a href={project.github_link} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.deploy_link} target="_blank" rel="noreferrer">
                Link 2 Deploy
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
