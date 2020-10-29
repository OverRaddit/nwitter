import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

export default() => {
    const history = useHistory(); //얘는 뭐징
    const onLogoutClick = () => {
        authService.signOut();
        history.push("/");
    };
    return (
        <>
            <button onClick={onLogoutClick}>Log out</button>
        </>
    );
};
