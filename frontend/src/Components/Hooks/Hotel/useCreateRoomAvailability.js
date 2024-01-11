import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateRoomAvailiability = (hotelRoomId) => {

    const createRoomAvailability = async (hotelRoomAvailable, id) => {
		console.log({hotelRoomAvailable})
		console.log(hotelRoomAvailable)
        await axios
	            .post(`/hotel/rooms/available/${id}/add`, hotelRoomAvailable, {
					params: {
                        hotelId: hotelRoomId
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
		createRoomAvailability
	};

}

export default useCreateRoomAvailiability;