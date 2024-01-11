import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useEditUser = () => {

    const history = useHistory();
    const editUser = async ({user}) => {
        await axios
	            .post(`/user/edit`, user) 
	            .then((res) => {
	                history.push('/user');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return (
        editUser
    )

}

export default useEditUser;