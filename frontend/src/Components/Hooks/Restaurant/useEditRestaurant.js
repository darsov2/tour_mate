import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useEditRestaurant = () => {

    const history = useHistory();
    const editRestaurant = async ({restaurnat}) => {
        await axios
	            .post(`/restaurant/edit`,user) 
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
        editRestaurant
    )

}

export default useEditRestaurant;