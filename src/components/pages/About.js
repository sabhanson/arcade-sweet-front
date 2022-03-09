import React from "react";
import { Carousel } from "react-bootstrap";

const styles = {
  h1: {
    marginTop: "30px",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
  },
  h3: {
    color: "#F46036",
  },
  p: {
    color: "black",
    background: "white",
  },
};

export function About() {
  return (
    <div className="row justify-content-center">
      <h1 style={styles.h1}>About the Dev Team</h1>
      <div className="col-sm-8 col-md-6 col-lg-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={styles.h3}>Parul Raj</h3>
              <p style={styles.p}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={styles.h3}>Megan McLean</h3>
              <p style={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={styles.h3}>Isaac Petersen</h3>
              <p style={styles.p}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3 style={styles.h3}>Sabrina Hanson</h3>
              <p style={styles.p}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
