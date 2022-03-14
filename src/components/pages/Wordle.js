import React, { useState, useEffect } from "react";
import Keyboard from "../Keyboard";
import { wordList } from "../../constants/wordList";
import "./styles/Wordle.css";
import CloseIcon from "@mui/icons-material/Close";

const Wordle = ({ handlePageChange }) => {
  const [boardData, setBoardData] = useState(
    JSON.parse(localStorage.getItem("board-data"))
  );
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [charArray, setCharArray] = useState([]);

  const resetBoard = () => {
    var alphabetIndex = Math.floor(Math.random() * 26);
    var wordIndex = Math.floor(
      Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length
    );
    let newBoardData = {
      ...boardData,
      solution: wordList[String.fromCharCode(97 + alphabetIndex)][wordIndex],
      rowIndex: 0,
      boardWords: [],
      boardRowStatus: [],
      presentCharArray: [],
      absentCharArray: [],
      correctCharArray: [],
      status: "IN_PROGRESS",
    };
    setBoardData(newBoardData);
    localStorage.setItem("board-data", JSON.stringify(newBoardData));
  };

  useEffect(() => {
    if (!boardData || !boardData.solution) {
      var alphabetIndex = Math.floor(Math.random() * 26);
      var wordIndex = Math.floor(
        Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length
      );
      let newBoardData = {
        ...boardData,
        solution: wordList[String.fromCharCode(97 + alphabetIndex)][wordIndex],
        rowIndex: 0,
        boardWords: [],
        boardRowStatus: [],
        presentCharArray: [],
        absentCharArray: [],
        correctCharArray: [],
        status: "IN_PROGRESS",
      };
      setBoardData(newBoardData);
      localStorage.setItem("board-data", JSON.stringify(newBoardData));
    }
  }, []);

  const handleMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const enterBoardWord = (word) => {
    let boardWords = boardData.boardWords;
    let boardRowStatus = boardData.boardRowStatus;
    let solution = boardData.solution;
    let presentCharArray = boardData.presentCharArray;
    let absentCharArray = boardData.absentCharArray;
    let correctCharArray = boardData.correctCharArray;
    let rowIndex = boardData.rowIndex;
    let rowStatus = [];
    let matchCount = 0;
    let status = boardData.status;

    for (let i = 0; i < word.length; i++) {
      if (solution.charAt(i) === word.charAt(i)) {
        matchCount++;
        rowStatus.push("correct");
        if (!correctCharArray.includes(word.charAt(i)))
          correctCharArray.push(word.charAt(i));
        if (presentCharArray.indexOf(word.charAt(i)) !== -1)
          presentCharArray.splice(presentCharArray.indexOf(word.charAt(i)), 1);
      } else if (solution.includes(word.charAt(i))) {
        rowStatus.push("present");
        if (
          !correctCharArray.includes(word.charAt(i)) &&
          !presentCharArray.includes(word.charAt(i))
        )
          presentCharArray.push(word.charAt(i));
      } else {
        rowStatus.push("absent");
        if (!absentCharArray.includes(word.charAt(i)))
          absentCharArray.push(word.charAt(i));
      }
    }
    if (matchCount === 5) {
      status = "WIN";
      handleMessage("You Won!");
      const token = localStorage.getItem("token");
      const postScore = () => {
        fetch("http://localhost:3001/api/scores", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            score: 1,
            gamevalue: 2,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });
      };
      postScore();
    } else if (rowIndex + 1 === 6) {
      status = "LOST";
      handleMessage(`You lost, the word was: ${boardData.solution}`);
      const token = localStorage.getItem("token");
      const postScore = () => {
        fetch("http://localhost:3001/api/scores", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            score: 0,
            gamevalue: 2,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });
      };
      postScore();
    }
    boardRowStatus.push(rowStatus);
    boardWords[rowIndex] = word;
    let newBoardData = {
      ...boardData,
      boardWords: boardWords,
      boardRowStatus: boardRowStatus,
      rowIndex: rowIndex + 1,
      status: status,
      presentCharArray: presentCharArray,
      absentCharArray: absentCharArray,
      correctCharArray: correctCharArray,
    };
    setBoardData(newBoardData);
    localStorage.setItem("board-data", JSON.stringify(newBoardData));
  };

  const enterCurrentText = (word) => {
    let boardWords = boardData.boardWords;
    let rowIndex = boardData.rowIndex;
    boardWords[rowIndex] = word;
    let newBoardData = { ...boardData, boardWords: boardWords };
    setBoardData(newBoardData);
  };

  const handleKeyPress = (key) => {
    if (boardData.rowIndex > 5 || boardData.status === "WIN") return;
    if (key === "ENTER") {
      if (charArray.length === 5) {
        let word = charArray.join("").toLowerCase();
        if (!wordList[word.charAt(0)].includes(word)) {
          handleError();
          handleMessage("Not in word list");
          return;
        }
        enterBoardWord(word);
        setCharArray([]);
      } else {
        handleMessage("Not enough letters");
      }
      return;
    }
    if (key === "⌫") {
      charArray.splice(charArray.length - 1, 1);
      setCharArray([...charArray]);
    } else if (charArray.length < 5) {
      charArray.push(key);
      setCharArray([...charArray]);
    }
    enterCurrentText(charArray.join("").toLowerCase());
  };

  return (
    <div className="container col-8">
      <div className="row justify-content-start col-12">
        <div className="col-1">
          <button className="x-button" onClick={() => handlePageChange("Home")}>
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="top">
        <div className="title">Wordle</div>
        <button className="reset-board letter-button" onClick={resetBoard}>
          {"\u27f3"}
        </button>
      </div>
      {message && <div className="message">{message}</div>}
      <div className="cube">
        {[0, 1, 2, 3, 4, 5].map((row, rowIndex) => (
          <div
            className={`cube-row ${
              boardData && row === boardData.rowIndex && error && "error"
            }`}
            key={rowIndex}
          >
            {[0, 1, 2, 3, 4].map((column, letterIndex) => (
              <div
                key={letterIndex}
                className={`letter ${
                  boardData && boardData.boardRowStatus[row]
                    ? boardData.boardRowStatus[row][column]
                    : ""
                }`}
              >
                {boardData &&
                  boardData.boardWords[row] &&
                  boardData.boardWords[row][column]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bottom">
        <Keyboard boardData={boardData} handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
};

export default Wordle;
