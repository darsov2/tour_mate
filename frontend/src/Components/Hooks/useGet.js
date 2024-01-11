import axios from "../../axios";
import { useState, useEffect, useContext } from 'react';

const useGet = (url, dep) => {

    console.log(url)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [changed, setChanged] = useState(0)
    const getData = async (uurl) => {
        console.log(localStorage.getItem("sessionId"))
        console.log("url od get " + uurl)
        await axios.
            get(uurl).then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getData(url);
    }, [dep, url, changed]);
    
    return {
        data,
        setData,
        isLoading,
        getData,
        setChanged
    };
};


export default useGet;