import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateTrip = (transportId) => {

    const createTrip = async (trip) => {
		console.log({trip})
		console.log(trip)
        await axios
	            .post(`/transport/available/add`, trip, {
					params: {
                        userId: localStorage.getItem("userId"),
                        transportId: transportId
					}
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
		createTrip
	};

}

export default useCreateTrip;