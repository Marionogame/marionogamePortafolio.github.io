import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projectsHeader2, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import { Carousel } from "react-responsive-carousel";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, index) => {
          return <ProjectCard key={index} repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              {/* <img
                className="logo_img"
                src={require(`../../assests/images/b.png`)}
                alt={"certificate.alt_name"}
              /> */}
              <Carousel
                className={styles.carouselCont}
                infiniteLoop={true}
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={9000}
                transitionTime={2000}
                direction={"SCROLL_DIRECTION.H"}
                // onChange={() => setEffect(!effect)}
                height={window.innerHeight}
              >
                <div className={styles.imgWe}>
                  <img
                    className={styles.imgWe}
                    src={require(`../../assests/images/sl1.png`)}
                    alt={"certificate.alt_name"}
                  />
                </div>

                <div className={styles.imgWe2}>
                  <img
                    className={styles.imgWe}
                    src={require(`../../assests/images/sl2.png`)}
                    alt={"certificate.alt_name"}
                  />
                </div>

                <div className={styles.imgWe3}>
                  <img
                    className={styles.imgWe}
                    src={require(`../../assests/images/sl3.png`)}
                    alt={"certificate.alt_name"}
                  />
                </div>
                <div className={styles.imgWe4}>
                  <img
                    className={styles.imgWe}
                    src={require(`../../assests/images/sl4.png`)}
                    alt={"certificate.alt_name"}
                  />
                </div>
                <div className={styles.imgWe5}>
                  <img
                    className={styles.imgWe}
                    src={require(`../../assests/images/sl5.png`)}
                    alt={"certificate.alt_name"}
                  />
                </div>
              </Carousel>
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader2.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader2["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/Marionogame"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
