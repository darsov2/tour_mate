import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useEditReview = () => {

    const history = useHistory();
    const editReview = async ({review}) => {
        await axios
	            .post(`/review/edit`, review) 
	            .then((res) => {
	                history.push('/review');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    } 
    return (
        editReview
    )

}

export default useEditReview;