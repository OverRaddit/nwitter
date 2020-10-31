import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default({ refreshUser,userObj }) => {

    const history = useHistory(); //얘는 뭐징
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);


    const onLogoutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const onChange = (event) => {
        const {
            target : {value}
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        if(userObj.uid !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName,
                //photoURL: "https://example.com/jane-q-user/profile.jpg"
              });
            refreshUser();
        }
    };
    const getMyNweets = async() => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId","==",userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(nweets.docs.map((doc) => doc.data()));
    };
    useEffect( () => {
        getMyNweets();
    }, [])


    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm" >
                <input
                 type="text"
                 placeholder="Display name" 
                 onChange={onChange}
                 value={newDisplayName}
                 autoFocus
                 className="formInput"
                />
                <input
                 type="submit" 
                 value="Update Profile" 
                 className="formBtn"
                 style={{
                     marginTop: 10,
                 }}
                />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogoutClick}>
                Log out
            </span>
        </div>
    );
};
