import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateHotel = () => {

    //const history = useNavigate();
    const createHotel = async (hotel, edit) => {
		console.log({hotel})
		console.log(hotel)

		if(!edit)
		{
			await axios
			.post(`/hotel/add`, hotel, {
				params: {
					userId: localStorage.getItem("userId")
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
		else
		{
			await axios
			.post(`/hotel/edit`, hotel) 
			.then((res) => {
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
			});
		}

    }

	return {
		createHotel
	};

}

export default useCreateHotel;