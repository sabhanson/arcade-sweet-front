import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const styles = {
  modal: {
    background: "#1B998B",
    textShadow: "2px 2px 3px #f46036",
  },
  input: {
    borderRadius: "8px",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  button: {
    background: "#d7263d",
    margin: "10px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  icon: {
    color: "#F46036",
    width: "30px",
    height: "30px",
  },
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
};

export function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProfileChange = () => {
    const token = localStorage.getItem("token")
    const newUsername = document.getElementById("newUsername").value
    const newEmail = document.getElementById("newEmail").value
    fetch("http://localhost:3001/api/userProfile" , {
      mode: "cors",
      method: "PUT",
      body: JSON.stringify({
        username: newUsername,
        email: newEmail
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      }
    })
  handleClose()
  }
  return (
    <>
      <div className="d-flex justify-content-end">
        <button onClick={handleShow} style={styles.button}>
          <SettingsIcon style={styles.icon} />
        </button>
        <Modal show={show} onHide={handleClose}>
          <div style={styles.modal}>
            <Modal.Header closeButton>
              <Modal.Title style={styles.title}>
                Update Account Settings
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="d-flex row justify-content-center">
                <input
                  style={styles.input}
                  className="col-12"
                  placeholder="new username..."
                  id = "newUsername"
                ></input>
                <input
                  style={styles.input}
                  className="col-12"
                  placeholder="new email..."
                  id = "newEmail"
                ></input>
                <input
                  style={styles.input}
                  className="col-12"
                  type={"file"}
                ></input>
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
        <div style={styles.div} className="card col-8">
          <h1 style={styles.h1}>My Highscores</h1>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
