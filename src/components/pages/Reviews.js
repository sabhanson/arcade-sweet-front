import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { postReviews, getReviews } from "../../utils/API";

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
    width: "45px",
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
  const [reviewDataCM, setReviewDataCM] = useState([]);
  const [reviewDataWordle, setReviewDataWordle] = useState([]);
  useEffect(() => {
    callGetReviews();
  }, []);

  const callGetReviews = async () => {
    let rCM = await getReviews(1);
    let rW = await getReviews(2);
    setReviewDataCM(rCM);
    setReviewDataWordle(rW);
  }

  const postReview = async (inputId) => {
    console.log(inputId)
    let review = document.getElementById(inputId).value;
    document.getElementById(inputId).value = "";
    if(inputId === "card-match")
      await postReviews(review, 1);
    else if(inputId === "wordle")
      await postReviews(review, 2);
    callGetReviews();
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>Card Matching</h1>
          {reviewDataCM.map((row) => (
            <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src={row.imgSrc}
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              {row.review} - {row.username}
            </p>
          </div>
          ))}
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              style={styles.input}
              className="col-10"
              id="card-match"
            ></input>
            <button className="col-2" 
              style={styles.button}
              onClick={() => postReview("card-match")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>Wordle</h1>
          {reviewDataWordle.map((row) => (
            <div style={styles.reviewDiv}>
            <div className="col-3">
              <img
                alt="alt tag"
                style={styles.img}
                src={row.imgSrc}
              ></img>
            </div>
            <p className="col-9" style={styles.p}>
              {row.review} - {row.username}
            </p>
          </div>
          ))}
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              style={styles.input}
              className="col-10"
              id="wordle"
            ></input>
            <button className="col-2" 
            style={styles.button}
            onClick={() => postReview("wordle")}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
