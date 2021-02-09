import React, {useCallback, useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {useDropzone} from "react-dropzone";

const UserProfiles = () => {
    const [userProfiles, setUserProfiles] = useState([]);
    const fetchUserProfile = () => {
        axios.get("http://localhost:8080/api/v1/user-profile").then((response) => {
            // console.log(response);
            setUserProfiles(response.data);
        });
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return userProfiles.map((userProfile, index) => {
        return (
            <div key={index}>
                {userProfile.userProfileId ? (
                    <img
                        src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                        alt=""
                    />
                ) : null}
                <br/>
                <br/>
                <h1>{userProfile.username}</h1>
                <p>{userProfile.userProfileId}</p>
                {/* <Dropzone userProfileId={userProfile.userProfile} /> */}
                <Dropzone {...userProfile} />
            </div>
        );
    });
};

function Dropzone({userProfileId}) {
    const onDrop = useCallback((accptedFiles) => {
        const file = accptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);

        axios
            .post(
                `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then(() => {
                console.log("file uploaded successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
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
            <UserProfiles/>
        </div>
    );
}

export default App;
