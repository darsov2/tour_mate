import React from "react";

import axios from "../../../axios.js";
import { useNavigate } from "react-router-dom";

const useCreateBusiness = () => {

    //const history = useNavigate();
    const createBusiness = async (business) => {
		console.log({business})
		console.log(business)
        await axios
	            .post(`/business/add`, business, {
					params: {
						userId: localStorage.getItem("userId")
					}
				}) 
	            .then((res) => {
					//window.location.reload()
	                //history.push('/hotel');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
    }

	return {
		createBusiness
	};

}

export default useCreateBusiness;