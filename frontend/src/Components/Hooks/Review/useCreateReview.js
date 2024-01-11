import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useCreateReview = () => {

    const history = useHistory();
    const createReview = async ({review}) => {
        await axios
	            .post(`/review/add`, user) 
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
            createReview
    )

}

export default useCreateReview;