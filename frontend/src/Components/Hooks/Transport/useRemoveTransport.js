import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useRemoveTransport = () => {

    const history = useHistory();
    const removeTransort = async ({id}) => {
        await axios
	            .get(`/transport/delete?transportId=` + id) 
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
        removeTransport
    )

}

export default useRemoveTransport;