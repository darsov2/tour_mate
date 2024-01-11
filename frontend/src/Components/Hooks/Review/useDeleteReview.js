import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const useRemoveReview = () => {

    const history = useHistory();
    const removeReview = async ({id}) => {
        await axios
	            .get(`/review/delete?userId=` + id) 
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
        removeReview
    )

}

export default useRemoveReview;