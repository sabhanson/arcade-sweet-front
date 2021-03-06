import React, { Component } from "react";
import "../components/pages/styles/Cloudinary.css"

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dreamz",
        uploadPreset: "arcade-avatars",
        sources: ["local", "camera"],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        croppingAspectRatio: 1,
        showSkipCropButton: false,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#2E264E",
            windowBorder: "#FFFFFF",
            tabIcon: "#F46036",
            menuIcons: "#F46036",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#F46036",
            action: "#F46036",
            inactiveTabIcon: "#F46036",
            error: "#F44235",
            inProgress: "#C5D86D",
            complete: "#C5D86D",
            sourceBg: "#1B998B",
          },
          fonts: {
            default: null,
            "'Space Mono', monospace": {
              url: "https://fonts.googleapis.com/css?family=Space+Mono",
              active: true,
            },
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const newAvatar = {
            file_name: result.info.url
          }
          const token = localStorage.getItem("token")
          fetch('https://powerful-badlands-74006.herokuapp.com/api/userProfile/avatarUpdate', {
            method: "PUT",
            body: JSON.stringify(newAvatar),
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            }
          });
          window.location.reload(false);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button
        id="upload_widget"
        className="btn third cloudinary-button"
      >
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
