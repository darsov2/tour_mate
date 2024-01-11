import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useEditTransport = () => {

    const history = useHistory();
    const editTransport = async ({transport}) => {
        await axios
	            .post(`/transport/edit`, transport) 
	            .then((res) => {
	                history.push('/transport');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return (
        editTransport
    )

}

export default useEditTransport;