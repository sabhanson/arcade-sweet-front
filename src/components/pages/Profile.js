import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./styles/Profile.css";
import CloudinaryUploadWidget from "../../utils/CloudinaryUploadWidget";
import { getProfileData } from "../../utils/API";
import { Avatar } from "@mui/material";
import { getUserScore, getWordleScores } from "../../utils/API";
import gold from "../../images/gold.png";
import silver from "../../images/silver.png";
import bronze from "../../images/bronze.png";

const styles = {
  tableContainer: {
    background: "#1B998B",
    maxWidth: "80vw",
    border: "5px double white",
    padding: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
    color: "white",
    marginTop: "50px",
  },
  title: {
    fontSize: "50px",
    textAlign: "left",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
    padding: "10px",
  },
  tableHeader: { color: "#F46036", fontSize: "20px" },
};

export function Profile() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [scoreDataCM, setscoreDataCM] = useState([]);
  const [scoreDataWordle, setscoreDataWordle] = useState([]);
  const [goldClass, setGoldClass] = useState("hidden");
  const [silverClass, setSilverClass] = useState("hidden");
  const [bronzeClass, setBronzeClass] = useState("hidden");

  useEffect(() => {
    callGetScores();
  }, []);

  const callGetScores = async () => {
    let sdCM = await getUserScore(1);
    let sdW = await getUserScore(2);
    setscoreDataCM(sdCM);
    const wordleScores = groupBy(sdW);
    const sortable = Object.fromEntries(
      Object.entries(wordleScores).sort(([, a], [, b]) => b - a)
    );
    setscoreDataWordle(sortable);
  };

  const groupBy = (arr) => {
    const numberofEntries = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (numberofEntries[element.username] == undefined) {
        numberofEntries[element.username] = 0;
      }
      numberofEntries[element.username] += 1;
    }
    return numberofEntries;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProfileChange = () => {
    const token = localStorage.getItem("token");
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("newEmail").value;
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const found = newEmail.match(regex);
    if (newUsername === "") {
      alert("You must enter something for your username");
      return;
    } else if (newEmail === "") {
      alert("you must enter something for your email");
      return;
    } else if (!found) {
      alert("you must use valid email formatting");
      return;
    } else {
      fetch("https://powerful-badlands-74006.herokuapp.com/api/userProfile/", {
        mode: "cors",
        method: "PUT",
        body: JSON.stringify({
          username: newUsername,
          email: newEmail,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
    }
    handleClose();
  };

  async function getData() {
    let pd = await getProfileData();
    setUsername(pd.username);
    setEmail(pd.email);
    setAvatar(pd.file_name);
    let gamesPlayed = pd.scores.length;

    if (gamesPlayed >= 5) {
      setBronzeClass("shown");
    }
    if (gamesPlayed >= 10) {
      setSilverClass("shown");
    }
    if (gamesPlayed >= 15) {
      setGoldClass("shown");
    }
    return pd;
  }
  getData();

  return (
    <>
      <div className="d-flex justify-content-end">
        <Modal show={show} onHide={handleClose}>
          <div className="modalContainer">
            <Modal.Header closeButton>
              <Modal.Title className="title">
                Update Account Settings
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="d-flex row justify-content-center">
                <input
                  className="input col-12"
                  placeholder="new username..."
                  id="newUsername"
                ></input>
                <input
                  className="input col-12"
                  placeholder="new email..."
                  id="newEmail"
                ></input>
                <CloudinaryUploadWidget />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleProfileChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="profileDetails card col-6">
              <button onClick={handleShow} className="settingsBtn">
                <SettingsIcon className="icon" />
              </button>
              <div className="row d-flex justify-content-center">
                <h1 className="title col-12">Profile Info</h1>
                <img
                  className="avatarStyle"
                  src={avatar}
                  alt="image of the user's avatar"
                />
                <p className="col-12">
                  Username : {username}
                  <br />
                  EMAIL : {email}
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <TableContainer className="col-6" style={styles.tableContainer}>
              <Table aria-label="simple table">
                <TableHead>
                  <p style={styles.title}>Your High Scores</p>
                  <TableRow>
                    <TableCell style={styles.tableHeader}>
                      <strong>Game Name</strong>
                    </TableCell>
                    <TableCell align="center" style={styles.tableHeader}>
                      <strong>High Score</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {scoreDataCM.map((row) => (
                    <TableRow
                      key="CardMatch"
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Card Match
                      </TableCell>
                      <TableCell align="center">{row.score}</TableCell>
                    </TableRow>
                  ))}
                  {Object.entries(scoreDataWordle).map((row) => (
                    <TableRow
                      key="Wordle"
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Wordle
                      </TableCell>
                      <TableCell align="center">{row[1]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="profileDetails card col-8">
              <h1 className="title">Your Awards</h1>
              <img
                src={gold}
                className={`medal ${goldClass}`}
                alt="gold medal"
              />
              <img
                src={silver}
                className={`medal ${silverClass}`}
                alt="silver medal"
              />
              <img
                src={bronze}
                className={`medal ${bronzeClass}`}
                alt="bronze medal"
              />
              <br />
              <br />
              <br />
            </div>
            </div>
          </Carousel.Item>
        </Carousel>
    </>
  );
}

export default Profile;
