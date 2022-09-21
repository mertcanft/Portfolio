import Video from "./Video";
import { Animator, batch, MoveIn } from "react-scroll-motion";
import photo from "../assets/img/reactdhcp.png";
import photo2 from "../assets/img/reactblog.png";
import photo3 from "../assets/img/ecomment.png";
import photo4 from "../assets/img/imageslider.png";

const Projects = () => {
  return (
    <>
      <Video />
      <div className="project-main-container">
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>My Projects</h1>
        </div>
        <div className="project-container">
          <Animator animation={batch(MoveIn(-600, 0))}>
            <div className="project-box">
              <img src={photo} alt="react-blog" />
              <div className="box-content">
                <h1>
                  DHCP Sunucu IP <br></br> Kullanim Project{" "}
                </h1>
                <span>
                  import "xlsx", "xls", "csv" <br></br>{" "}
                  <span className="framework">
                    React.Js <br></br>
                  </span>
                  <br></br> - JavaScript %75
                  <br></br> - HTML %16 <br></br> - CSS %9
                </span>
                <a
                  href="https://github.com/mertcanft/DHCP-Sunucu-IP-Kullanim-Project"
                  target="_blank"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(600, 0))}>
            <div className="project-box">
              <div className="box-content">
                <h1>React Blog PROJECT</h1>
                <span>
                  <span className="framework">
                    {" "}
                    React.Js <br></br>
                  </span>
                  <br></br> - JavaScript %65.4
                  <br></br> - HTML %8.6 <br></br> - CSS %26
                </span>
                <a href="https://github.com/mertcanft/blogdemo" target="_blank">
                  View Source Code
                </a>
              </div>
              <img src={photo2} alt="weather-app" />
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(-600, 0))}>
            <div className="project-box">
              <img src={photo3} alt="dtc" />
              <div className="box-content">
                <h1>E Comment PROJECT</h1>
                <span>
                  <br></br> - JavaScript %45.1
                  <br></br> - HTML %16.2 <br></br> - CSS %38.7
                </span>
                <a
                  href="https://github.com/mertcanft/E-COMMENT-PROJECT"
                  target="_blank"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(MoveIn(600, 0))}>
            <div className="project-box">
              <div className="box-content">
                <h1>İmage Slider PROJECT</h1>
                <span>
                  <br></br> - JavaScript %41.1
                  <br></br> - HTML %24.7 <br></br> - CSS %34.2
                </span>
                <a
                  href="https://github.com/mertcanft/IMAGE-SLIDER-PROJECT"
                  target="_blank"
                >
                  View Source Code
                </a>
              </div>
              <img src={photo4} alt="todo-app" />
            </div>
          </Animator>
        </div>
      </div>
    </>
  );
};

export default Projects;
