import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useRemoveHotel = () => {

    const history = useHistory();
    const removeHotel = async ({id}) => {
        await axios
	            .get(`/hotel/delete?userId=` + id) 
	            .then((res) => {
	                history.push('/hotel');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return (
        removeHotel
    )

}

export default useRemoveHotel;