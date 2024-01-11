import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateHotelRoom = (hotelId) => {

    const createHotelRoom = async (hotelRoom) => {
		console.log({hotelRoom})
		console.log(hotelRoom)
        await axios
	            .post(`/hotel/rooms/add`, hotelRoom, {
					params: {
                        userId: localStorage.getItem("userId"),
                        hotelId: hotelId
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
		createHotelRoom
	};

}

export default useCreateHotelRoom;