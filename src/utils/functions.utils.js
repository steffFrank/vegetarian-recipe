import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
        getData();
    }, [url]);
    return {data, isLoading, error};
}
