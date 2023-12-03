import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'
import videoSource from "../../Assets/bg-ink.mp4";


function Home() {
    return (
        <Container fluid className="homeDesign">
          <div className="fullscreen-video">
            <video className="videoBg" autoPlay loop muted>
              <source src={videoSource} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
    
          </div>
          <aside>
            <div>
            <h1>Alejandro López</h1>
            <h3>{"{Full Stack Developer + Graphic Designer}"}</h3>
            </div>
            <div className="description">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nihil animi voluptatum recusandae qui. Quod iure, quas, sunt natus, reprehenderit tempore sit laboriosam neque inventore minus voluptas rerum nesciunt placeat.</h1>

            </div>


          </aside>
          <main></main>
        </Container>
      );
}

export default Home;
