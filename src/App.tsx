import React, { useEffect } from "react";
import AboutMe from "AboutMe";
import ExperienceStepper from "ExperienceStepper";
import StepBody from "ExperienceStepper/StepBody";
import { getText } from "utils/commonUtils";
import "./App.scss";
import EducationStepper from "EducationStepper";
import Projects from "Projects";
import Blogs from "Blogs";
import Footer from "Footer";
import { imagePath, images } from "constants/img";
import Brief from "Brief";
import Navbar from "Navbar";

const App: React.FC = () => {
  useEffect(() => {
    function noscroll() {
      window.scrollTo(0, 0);
    }
    window.addEventListener("scroll", noscroll);
    setTimeout(() => {
      window.removeEventListener("scroll", noscroll);
    }, 4000);

    return () => {
      window.addEventListener("scroll", noscroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Brief
        briefDesc={
          <>
            <p> I am a</p>
            <span>Software Developer</span>
            <p>
              with 2+ years of experience in React, Redux, TypeScript,
              JavaScript, Webpack,.
            </p>
          </>
        }
        skillsHeading="Skills"
        skills={[
          { logoUrl: imagePath + images.react_logo, name: "React" },
          { logoUrl: imagePath + images.redux_logo, name: "Redux" },
          { logoUrl: imagePath + images.ts_logo, name: "TypeScript" },
          { logoUrl: imagePath + images.js_logo, name: "JavaScript" },
          { logoUrl: imagePath + images.sass_logo, name: "Sass" },
          { logoUrl: imagePath + images.git_logo, name: "GIT" },
          { logoUrl: imagePath + images.python_logo, name: "Python" },
        ]}
      />
      <ExperienceStepper
        heading={getText("experience.heading")}
        scrollRange={[8, 36]}
        stepProps={[
          {
            imgPath: `${process.env.PUBLIC_URL}/${getText(
              "experience.amdocs.imgPath"
            )}`,
            imgAlt: getText("experience.amdocs.imgAlt"),
            title: getText("experience.amdocs.title"),
            body: (
              <StepBody
                title={getText("experience.amdocs.body.title")}
                tasks={getText("experience.amdocs.body.task")}
              />
            ),
          },
          {
            imgPath: `${process.env.PUBLIC_URL}/${getText(
              "experience.cognizant.imgPath"
            )}`,
            imgAlt: getText("experience.cognizant.imgAlt"),
            title: getText("experience.cognizant.title"),
            body: (
              <StepBody
                title={getText("experience.cognizant.body.title")}
                tasks={getText("experience.cognizant.body.task")}
              />
            ),
          },
        ]}
      />
      <EducationStepper
        heading={getText("education.heading")}
        stepProps={[
          {
            imgPath: `${process.env.PUBLIC_URL}/${getText(
              "education.bTech.imgPath"
            )}`,
            imgAlt: getText("education.bTech.imgAlt"),
            title: getText("education.bTech.title"),
            body: (
              <StepBody
                title={getText("education.bTech.body.title")}
                tasks={getText("education.bTech.body.task")}
              />
            ),
          },
          {
            imgPath: `${process.env.PUBLIC_URL}/${getText(
              "education.class12.imgPath"
            )}`,
            imgAlt: getText("education.class12.imgAlt"),
            title: getText("education.class12.title"),
            body: (
              <StepBody
                title={getText("education.class12.body.title")}
                tasks={getText("education.class12.body.task")}
              />
            ),
          },
          {
            imgPath: `${process.env.PUBLIC_URL}/${getText(
              "education.class10.imgPath"
            )}`,
            imgAlt: getText("education.class10.imgAlt"),
            title: getText("education.class10.title"),
            body: (
              <StepBody
                title={getText("education.class10.body.title")}
                tasks={getText("education.class10.body.task")}
              />
            ),
          },
        ]}
      />
      <Projects
        heading={getText("projects.heading")}
        projectItemProps={[
          {
            backgroundUrl:
              imagePath + getText("projects.socialMedia.backgroundUrl"),
            descBrief: getText("projects.socialMedia.descBrief"),
            descTitle: getText("projects.socialMedia.descTitle"),
            linkText: getText("projects.socialMedia.linkText"),
            urlLink: getText("projects.socialMedia.urlLink"),
          },
          {
            backgroundUrl:
              imagePath + getText("projects.chattingApp.backgroundUrl"),
            descBrief: getText("projects.chattingApp.descBrief"),
            descTitle: getText("projects.chattingApp.descTitle"),
            linkText: getText("projects.chattingApp.linkText"),
            urlLink: getText("projects.chattingApp.urlLink"),
          },
        ]}
      />
      <Blogs
        heading={getText("blogs.heading")}
        articles={getText("blogs.articles")}
      />
      <Footer />
    </div>
  );
};

export default App;
