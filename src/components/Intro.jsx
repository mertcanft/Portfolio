import Video from "./Video";
import photo from "../assets/img/photo-2.jpg";
import { Animator, batch, Move } from "react-scroll-motion";

const Intro = () => {
  return (
    <>
      <Video />
      <div className="intro-container">
        <Animator animation={batch(Move(1200, 0, 0, 0))}>
          <img src={photo} alt="profile-photo" className="profile-image" />
        </Animator>
        <div className="text-area">
          <Animator animation={batch(Move(-600, 0, 0, 0))}>
            <h1>Who am I ?</h1>
          </Animator>
          <Animator animation={batch(Move(0, 500, 0, 0))}>
            <code>
              {" "}
              <strong style={{ color: "red" }}>const mertcan =</strong> "I'm
              creative and self-learner Frontend Developer. Also talented at
              React Js. I'm confident that I can go beyond my own limits and
              make progress in every field where I can access information. I am
              curious about to learn new technologies, and I am keen to develop
              and improve existing ones. I am aware that willing, diligent and
              careful work will definitely result in success."
            </code>
          </Animator>
          <Animator animation={batch(Move(0, 500, 0, 0))}>
            <code>
              <strong style={{ color: "red" }}>const techs frontend = </strong>
              ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Firebase",
              "Tailwind", "Bootstrap", "Git", "Github"]
            </code>
          </Animator>
          <Animator animation={batch(Move(0, 500, 0, 0))}>
            <code>
              <strong style={{ color: "red" }}>const techs jr.devOps = </strong>
              ["MySQL", "Windows PowerShell", "Microsoft Server", "Active
              Directory", "Microsoft System Center Orchestrator", "DHCP",
              "VBScript", "TCP/IP"]
            </code>
          </Animator>
        </div>
      </div>
    </>
  );
};

export default Intro;
