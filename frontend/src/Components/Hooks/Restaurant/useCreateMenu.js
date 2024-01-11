import React from "react";
import axios from "../../../axios";
import { useNavigate } from 'react-router-dom';

const useCreateMenu = () => {

	const navigator = useNavigate();

    const createMenu = async (id, menu) => {
		console.log(menu)
        console.log(id)
        await axios
	            .post(`/restaurant/` + id + "/menu/add", menu) 
	            .then((res) => {
					console.log("NOVO MENI");
					console.log(res)
					//window.location.reload()
					//navigator("/resources/restaurant/" + id)
	                //history.push('/restaurant');
	            })
	            .catch((err) => {
	                console.log(err);
	            })
	            .finally(() => {
	            });
	}
	

    return {
        createMenu
	}
}

export default useCreateMenu;