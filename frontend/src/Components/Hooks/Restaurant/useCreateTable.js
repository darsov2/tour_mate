import React from "react";
import axios from "../../../axios";
import { useNavigate } from 'react-router-dom';

const useCreateTable = () => {

    const createTable = async (id, table, refresh) => {
		console.log(table)
        await axios
	            .post(`/restaurant/table/${id}/add`, null, {
					params: table
				})
	            .then((res) => {
					console.log(res)
					refresh(prev => ++prev)
	                //history.push('/restaurant');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    }

    return {
        createTable
	}
}

export default useCreateTable;