import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Reviews.css";
import { Avatar } from "@mui/material";
import { postReviews, getReviews } from "../../utils/API";

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
    let review = document.getElementById(inputId).value;
    document.getElementById(inputId).value = "";
    if (inputId === "card-match") await postReviews(review, 1);
    else if (inputId === "wordle") await postReviews(review, 2);
    callGetReviews();
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="reviewContainer card col-6">
          <h1 className="gameTitle">Card Matching</h1>
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
              className="btn third"
              onClick={() => postReview("card-match")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="reviewContainer card col-6">
          <h1 className="gameTitle">Wordle</h1>
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
            <button className="btn third" onClick={() => postReview("wordle")}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
