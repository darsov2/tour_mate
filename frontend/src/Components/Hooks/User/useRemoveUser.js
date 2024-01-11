import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useRemoveUser = () => {

    const history = useHistory();
    const removeUser = async ({id}) => {
        await axios
	            .get(`/user/delete?userId=` + id) 
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
        removeUser
    )

}

export default useRemoveUser;