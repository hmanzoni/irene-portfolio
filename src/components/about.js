import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useAboutData } from '../hooks/useAboutData';
import Titles from './ui/Titles';

const TextSecondary = ({ item }) => {
  const label = item.split(':')[0];
  const text = item.split(':')[1];
  return (
    <div className="col-sm-6 py-2">
      <h6>
        {label}: <span className="text-secondary">{text}</span>
      </h6>
    </div>
  );
};

const About = () => {
  const { datoCmsAbout, allDatoCmsSectionsTitle } = useAboutData();
  const {
    mainTitle,
    littleTitle,
    subtitle,
    itemsInformation,
    description,
    image,
  } = datoCmsAbout;
  const itemsTextSec = itemsInformation.split(',\n');
  const sectionOpst = {
    sectionName: JSON.parse(allDatoCmsSectionsTitle.nodes[0]?.section)[0],
    mainTitle:
      allDatoCmsSectionsTitle.nodes[0]?.mainTitle || mainTitle || 'About',
    littleTitle:
      allDatoCmsSectionsTitle.nodes[0]?.littleTitle ||
      littleTitle ||
      'About Me',
  };
  return (
    <div className="container-fluid py-5" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <GatsbyImage
              className="img-fluid rounded w-100"
              image={image.gatsbyImageData}
              alt={image.alt || image.filename || 'image'}
            />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">{subtitle}</h3>
            <p>{description}</p>
            <div className="row mb-3">
              {itemsTextSec.map((item, i) => (
                <TextSecondary key={i} item={item} />
              ))}
            </div>
            <a href="/#" className="btn btn-outline-primary mr-4">
              Hire Me
            </a>
            <a href="/#" className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
