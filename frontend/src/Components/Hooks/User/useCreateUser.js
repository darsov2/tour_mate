import React from "react";
import axios from "../../../axios.js";
import { useHistory, useNavigate } from 'react-router-dom';

const useCreateUser = () => {

    const navigator = useNavigate()
    const createUser = async (user) => {
        await axios
	            .post(`/register`, user) 
	            .then((res) => {
	                navigator("/login")
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return {
            createUser
	}

}

export default useCreateUser;