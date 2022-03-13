import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles/About.css";
import Megan from "../../images/megan.png"
import Sab from "../../images/sabrina.png"
import Parul from "../../images/parul.png"
import Isaac from "../../images/isaac.png"


export function About() {
  return (
    <div className="row justify-content-center">
      <h1 className="title">About the Dev Team</h1>
      <div className="col-sm-8 col-md-6 col-lg-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Parul}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="names">Parul Raj</h3>
              <p className="aboutText">
                Favorite Game: Card-Matching
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Megan}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="names">Megan McLean</h3>
              <p className="aboutText">
                Favorite Game: Wordle
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Isaac}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="names">Isaac Petersen</h3>
              <p className="aboutText">
                Favorite Game: Wordle
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Sab}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3 className="names">Sabrina Hanson</h3>
              <p className="aboutText">
                Favorite Game: Card-Matching
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default About;