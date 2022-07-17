import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Input form validation",
      description: "O'zbekcha varianti",
      imgUrl: 'https://miro.medium.com/max/1400/1*pPeo11DhEmn8OkQQl1E8FQ.png',
      url: 'https://input-form-with-backend.netlify.app/'
    },
    {
      title: "27-maktab project",
      description: "Oltiariq tumani 27-maktab proyekti",
      imgUrl: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/111994/s960_EmptyClassroom.jpg',
      url: 'https://27maktab-oltiariq.netlify.app/'
    },
    {
      title: "Food Delivery App",
      description: "React asosida tayyorlangan oddiy food App",
      imgUrl: 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591',
      url: 'https://foodappshoh.netlify.app/'
    },
    {
      title: "HTTP requests",
      description: "Reactda GET, POST, PUT, DELETE metodlarida tayyorlangan ",
      imgUrl: 'https://devops.com.vn/wp-content/uploads/2019/04/http_request.jpg',
      url: 'https://httprequests.netlify.app/'
    },
    {
      title: "User Input form",
      description: "Foydalanuvchini username va yoshi bilan registratsiya qilish formasi",
      imgUrl: 'https://www.positioniseverything.net/wp-content/uploads/2021/11/Get-User-Input-C.jpg',
      url: 'https://user-input-react.netlify.app/'
    },
    {
      title: "my first portfolio",
      description: "Frontendni o'rganganimga 2 oy bo'lganda tayyorlagan web saytim",
      imgUrl: 'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png',
      url: 'https://shohriyormirzo.netlify.app/'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
