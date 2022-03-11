import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Reviews.css";
import { Avatar } from "@mui/material";
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
  };

  const postReview = async (inputId) => {
    console.log(inputId);
    let review = document.getElementById(inputId).value;
    document.getElementById(inputId).value = "";
    if (inputId === "card-match") await postReviews(review, 1);
    else if (inputId === "wordle") await postReviews(review, 2);
    callGetReviews();
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-6">
          <h1 style={styles.h1}>Card Matching</h1>
          {reviewDataCM.map((row) => (
            <div className="row justify-content-center">
              <div className="d-flex justify-content-end col-2">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  className="profileImg"
                  alt="alt tag"
                  src={row.imgSrc}
                />
              </div>
              <p className=" reviewTxt col-9">
                {row.review} - {row.username}
              </p>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              className="reviewBox col-8"
              id="card-match"
            ></input>
            <button
              className="btn third col-2"
              style={styles.button}
              onClick={() => postReview("card-match")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={styles.div} className="card col-6">
          <h1 style={styles.h1}>Wordle</h1>
          {reviewDataWordle.map((row) => (
            <div className="row justify-content-center">
              <div className="d-flex justify-content-end col-2">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  className="profileImg"
                  alt="alt tag"
                  src={row.imgSrc}
                />
              </div>
              <p className=" reviewTxt col-9">
                {row.review} - {row.username}
              </p>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <input
              placeholder="add a review..."
              className="reviewBox col-8"
              id="wordle"
            ></input>
            <button
              className="btn third col-2"
              style={styles.button}
              onClick={() => postReview("wordle")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
