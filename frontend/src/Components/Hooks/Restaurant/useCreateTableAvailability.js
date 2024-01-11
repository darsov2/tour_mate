import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateTableAvailability = () => {

    const createTableAvailability = async (restaurantTableAvailible, id) => {
		console.log({restaurantTableAvailible})
		console.log(restaurantTableAvailible)
        await axios
	            .post(`/restaurant/table/${id}/available/add`, restaurantTableAvailible, {
				}) 
	            .then((res) => {
	                //history.push('/hotel');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    }

	return {
		createTableAvailability
	};

}

export default useCreateTableAvailability;