import logo from "./logo.svg";
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const fetchUserProfile = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then((response) => {
      console.log(response);
      setUserProfiles(response.data);
    });
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return userProfiles.map((userProfile, index) => {
    return (
      <div key={index}>
        {/* todo: profile image */}
        <br />
        <br />
        <h1>{userProfile.username}</h1>
        <p>{userProfile.userProfileId}</p>
        <Dropzone />
      </div>
    );
  });
};

function Dropzone() {
  const onDrop = useCallback((accptedFiles) => {
    const file = accptedFiles[0];
    console.log(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>
          Drag 'n' drop some profile image here, or click to select profile
          image
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <UserProfiles />
    </div>
  );
}

export default App;
