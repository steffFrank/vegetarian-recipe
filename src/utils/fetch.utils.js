import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setData(data);
                setIsloading(false);
            } catch(error) {
                setIsloading(false);
                setError(error);
            }
        }
        getData();
    }, [url]);
    
    return { data, isLoading, error };
}