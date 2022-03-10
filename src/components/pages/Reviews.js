import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    marginTop: "30px",
    background: "#1B998B",
    border: "5px double white",
    padding: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
  },
  h1: {
    textAlign: "center",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
    padding: "10px",
  },
  reviewDiv: {
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid black",
    borderRadius: "10px",
    background: "white",
    margin: "3px",
  },
  p: {
    fontSize: "20px",
    textAlign: "center",
    alignSelf: "center",
  },
  img: {
    borderRadius: "50%",
    width: "100px",
  },
  input: {
    borderRadius: "7px",
  },
  button: {
    padding: "3px",
    // fontFamily: "cursive",
    background: "#F46036",
    color: "white",
    borderRadius: "7px",
    margin: "10px",
    maxWidth: "fit-content",
  },
};

export function Reviews() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>Card Matching</h1>
          <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              wow i love this game! so much fun and better than anything I've
              ever made! -tommybahama
            </p>
          </div>
          <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              i hate this game a lot!! -hatergamer
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              style={styles.input}
              className="col-10"
            ></input>
            <button className="col-2" style={styles.button}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>Wordle</h1>
          <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              I love that this wordle doesn't have repeating characters!
              -wordywyatt
            </p>
          </div>
          <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              i am indifferent!! -newuser
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              style={styles.input}
              className="col-10"
            ></input>
            <button className="col-2" style={styles.button}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>TBD Game</h1>
          <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              this game will probably be really cool once it's made
              -wishfulgamer
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              style={styles.input}
              className="col-10"
            ></input>
            <button className="col-2" style={styles.button}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
