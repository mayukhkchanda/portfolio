import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { getText, setRootCssVars } from "utils/commonUtils";
import { imagePath, images, pdfs } from "constants/img";
import Blogs from "Blogs";
import Brief from "Brief";
import Navbar from "Navbar";
import Footer from "Footer";
import AboutMe from "AboutMe";
import Projects from "Projects";
import Stepper from "Stepper";
import StepBody from "Stepper/StepBody";
import "./App.scss";
import Contact from "Contact";

const App: React.FC = () => {
  const [isBgPurple, setBgPurple] = useState(false);

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

  const toggleBackground = () => {
    setBgPurple((prevState) => {
      const newState = !prevState;
      if (newState) {
        // purple bg
        document.body.style.color = "#fff";
        setRootCssVars("--heading-border-color", "#fff");
        setRootCssVars("--text-primary", "#fff");
        setRootCssVars("--link-bg-color", "#fff");
        setRootCssVars("--link-text-hover-color", "#000");
        setRootCssVars("--stroke-fill-color", "#fff");
      } else {
        //white bg
        document.body.style.color = "#000";
        setRootCssVars("--heading-border-color", "#000");
        setRootCssVars("--text-primary", "#000");
        setRootCssVars("--link-bg-color", "#bf4fbf");
        setRootCssVars("--link-text-hover-color", "#fff");
        setRootCssVars("--stroke-fill-color", "#000");
      }
      return newState;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <AboutMe isBgPurple={isBgPurple} toggleBackground={toggleBackground} />
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
      <Stepper
        id="experience"
        svgLength={170}
        stepDivMaxHeight={400}
        heading={getText("experience.heading")}
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
      <Stepper
        id="education"
        svgLength={122}
        stepDivMaxHeight={160}
        rootClassname={"education"}
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
      <Contact
        heading={getText("contacts.heading")}
        contacts={[
          {
            icon: <EmailIcon />,
            text: (
              <a
                href="mailto:mayukhkchanda@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                mayukhkchanda@gmail.com
              </a>
            ),
            key: "mayukhkchanda@gmail.com",
          },
          {
            icon: <PictureAsPdfIcon />,
            text: (
              <a
                href={imagePath + pdfs.resume}
                target="_blank"
                rel="noreferrer"
              >
                Mayukh's Resume
              </a>
            ),
            key: "Mayukh's Resume",
          },
          {
            icon: <LinkedInIcon />,
            text: (
              <a
                href="https://www.linkedin.com/in/mayukh-chanda-9a0080172/"
                target="_blank"
                rel="noreferrer"
              >
                Mayukh Kanti Chanda
              </a>
            ),
            key: "Mayukh Kanti Chanda",
          },
          {
            icon: <GitHubIcon />,
            text: (
              <a
                href="https://github.com/mayukhkchanda"
                target="_blank"
                rel="noreferrer"
              >
                mayukhkchanda
              </a>
            ),
            key: "mayukhkchanda",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;
