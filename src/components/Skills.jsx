import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const html = 95;
const css = 90;
const js = 60;
const react = 70;
const redux = 50;
const python = 45;
const django = 30;

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <CircularProgressbar
                    value={html}
                    text="95%"
                    className="circular"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={css} text="90%" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={js} text="60%" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={react} text="70%" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={redux} text="50%" />
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={python} text="45%" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={django} text="30%" />
                  <h5>Django</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
