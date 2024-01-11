import React from "react";

import axios from "../../../axios.js";
import { Navigate, useAsyncValue, useNavigate } from "react-router-dom";
import LoginForm from "../../Login/LoginForm.js";

const useLogin = () => {

    const navigator = useNavigate()
    //const history = useNavigate();
    const login = async (loginData) => {
		console.log({loginData})
		console.log(loginData)
        await axios
	            .post(`/api/login`, {
                    username: loginData.email,
                    password: loginData.password
                }, {
                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }) 
	            .then((res) => {
					const sessionId = res.data.auth.details.sessionId;
					const userId = res.data.auth.principal.userID;
					
					localStorage.setItem("sessionId", sessionId);
					localStorage.setItem("userId", userId);
					if(sessionId === null)
					{
					}
                    navigator("/home")
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    }

	return {
		login
	};

}

export default useLogin;