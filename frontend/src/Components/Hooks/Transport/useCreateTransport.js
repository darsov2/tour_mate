import React from "react";
import axios from "../../../axios";
import { useHistory } from 'react-router-dom';

const useCreateTransport = () => {

    const createTransport = async (transport, edit) => {
			if(!edit)
			{
				await axios
	            .post(`/transport/add`, transport) 
	            .then((res) => {
	                //history.push('/transport');
					console.log(res)
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
			}
			else
			{
				await axios
	            .post(`/transport/edit`, transport) 
	            .then((res) => {
	                //history.push('/transport');
					console.log(res)
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
			}
    }

    return {
        createTransport
	}

}

export default useCreateTransport;