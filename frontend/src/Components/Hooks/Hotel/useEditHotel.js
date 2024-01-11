import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useEditHotel = () => {

    const history = useHistory();
    const editHotel = async ({hotel}) => {
        await axios
	            .post(`/hotel/edit`, hotel) 
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
        editHotel
    )

}

export default useEditHotel;