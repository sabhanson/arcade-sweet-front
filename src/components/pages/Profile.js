import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/Profile.css";
import CloudinaryUploadWidget from "../../utils/CloudinaryUploadWidget";
import { getProfileData } from "../../utils/API";
import { Avatar } from "@mui/material";

export function Profile() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProfileChange = () => {
    const token = localStorage.getItem("token");
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("newEmail").value;
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const found = newEmail.match(regex);
    console.log(newEmail);
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
              {/* need to add an onclick for the save changes button that submits a put request to change the user data */}
              <Button variant="primary" onClick={handleProfileChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
      <div className="d-flex justify-content-center">
        <div className="profileDetails card col-6">
          <button onClick={handleShow} className="settingsBtn">
            <SettingsIcon className="icon" />
          </button>
          <div className="row d-flex justify-content-center">
            <h1 className="title col-12">Profile Info</h1>
            <img className="avatarStyle" src={avatar} />
            <p className="col-12">
              Username : {username}
              <br />
              EMAIL : {email}
            </p>
          </div>
        </div>

        {/* <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>My Highscores</h1>
        </div> */}
      </div>
    </>
  );
}

export default Profile;
