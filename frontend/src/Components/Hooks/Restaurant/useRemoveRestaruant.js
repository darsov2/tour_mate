import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useRemoveRestaurant = () => {

    const history = useHistory();
    const removeRestaurant = async ({id}) => {
        await axios
	            .get(`/restaurant/delete?restaurantId=` + id) 
	            .then((res) => {
	                history.push('/restaurant');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return (
        removeRestaurant
    )

}

export default useRemoveRestaurant;