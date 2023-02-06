import axios from "axios";
import { useMemo, useState } from "react";

export const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const memoizedData = useMemo(() => {

        const getData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
        getData(url);
        return data;
    }, [url]);

    return {data: memoizedData, isLoading, error};
}