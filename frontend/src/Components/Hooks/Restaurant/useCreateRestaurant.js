import React from "react";
import axios from "../../../axios";
import { useNavigate } from 'react-router-dom';

const useCreateRestaurant = () => {

	const navigator = useNavigate();

    const createRestaurant = async (restaurant, edit) => {
		console.log(restaurant)
		if(!edit)
		{
			console.log(restaurant)
			await axios
			.post(`/restaurant/add`, restaurant, {
				params: {
					userId: localStorage.getItem('userId')
				}
			}) 
			.then((res) => {
				// console.log(res)
				// window.location.reload()
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
			.post(`/restaurant/edit`, restaurant) 
			.then((res) => {
				console.log(res)
				//window.location.reload()
				//navigator("/resources/restaurant")
				//history.push('/restaurant');
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
			});
		}

    }

    return {
        createRestaurant
	}
}

export default useCreateRestaurant;