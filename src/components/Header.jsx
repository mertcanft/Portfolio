import Video from "./Video";
import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Animator, batch, Sticky, Zoom } from "react-scroll-motion";

const Header = () => {
  const Spin = (cycle) => ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  });

  return (
    <div className="header-container">
      <Animator animation={batch(Sticky())}>
        <Video />
      </Animator>
      <div className="header-content-container">
        <div className="header-content">
          <span>Hello, I'm</span>
          <Animator animation={batch(Zoom())}>
            <h1>MERTCAN ÇİFTÇİ</h1>
          </Animator>
          <Animator animation={batch(Spin(2))}>
            <span className="type-writer">
              I'm
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                words={[
                  " Frontend Developer",
                  " JavaScript Developer",
                  " React Developer",
                ]}
              />
            </span>
          </Animator>
        </div>

        <div className="icons-container">
          <div className="icons-div">
            <a href="https://github.com/mertcanft" target="_blank">
              <BsGithub />
            </a>
          </div>
          <div className="icons-div">
            <a href="https://www.linkedin.com/in/mertcanft/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="icons-div">
            <a href="https://twitter.com/mertcanft" target="_blank">
              <BsTwitter />{" "}
            </a>
          </div>
          <div className="icons-div">
            <a href="mailto:mertcanft@gmail.com" target="_blank">
              <MdEmail />{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="icon-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
