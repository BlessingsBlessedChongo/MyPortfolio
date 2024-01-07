/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workimage.jpg";

const imageAltText = "desktop with books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The OtherSide Website ",
    description:
      "An exciting platform for young people to be heard by casting their votes on their favourite artist's songs.",
    url: "https://wonderful-water-08aef870f.4.azurestaticapps.net/index.html",
  },
  {
    title: " Healthcare System Using C#",
    description:
      "This system is a prototype and is designed to link Health Professionals to Patients.",
    url: "https://github.com/BlessingsBlessedChongo/HealthCareSystem",
  },
  {
    title: "My Resume Site",
    description:
      "It includes my educational background, skills and other relevant experiences",
    url: "https://BlessingsBlessedChongo.github.io",
  },
  {
    title: "Simple Calculator with Python",
    description:
      "A simple calculator I made with python to calculate division and multiplication on two numbers then perform  multi-calculations using addition and subtraction. It can also perform Other simple calculations too",
    url: "https://github.com/BlessingsBlessingsChongo/SimpleCalculator",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
