import hotelImg from "./hotel.png";
import newsImg from "./news.png";
import "./projects.css";
import React, { Suspense } from "react";

import MySpinner from "../../components/spinner";
const ProjectComp = React.lazy(() => import("./project"));

export default function ProjectRow() {
  const projects = [
    {
      heading: "Hotel Website",
      image: hotelImg,
      link: "https://hotel-website-landing.herokuapp.com/",
      gitlink: "https://github.com/Ugurb20/hotel-website",
      description:
        "This is one of my latest projects. It’s a basic hotel landing page. I did all the design and devolopment by myself usin React and Figma. I used bootstrap to add a carousel and navbar. I think it looks cool.",
    },
    {
      heading: "News Website",
      image: newsImg,
      link: "#",
      gitlink: "https://github.com/Ugurb20/newsSite",
      description:
        "For this project  i got help from my friend who is a designer. I devoleped his design and turnt it into this website. ",
    },
  ];

  return (
    <div id="projects">
      {projects.map((project, i) => {
        return (
          <div className="container projects-container" id={`project${i}`}>
            <Suspense fallback={<MySpinner />}>
              <ProjectComp project={project} />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}
