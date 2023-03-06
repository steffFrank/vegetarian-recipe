import { useState, useEffect } from "react";
import axios from "axios";

const getRecipe = id => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipesInfo")) || {};
    return storedRecipes[id] || null
}
export const useAxios = (id) => {
  const baseUrl = process.env.REACT_APP_BASEURL;
  const apiQuery = `apiKey=${process.env.REACT_APP_APIKEY}`;
  const url = `${baseUrl}${id}/information?${apiQuery}`;
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(() => getRecipe(id));

  useEffect(() => {
    const getData = async () => {
      try {
        if (!data) {
          const response = await axios.get(url);
          const fetchedData = response.data;
          const storedRecipes = JSON.parse(
            localStorage.getItem("recipesInfo")
          ) || {};
          storedRecipes[id] = fetchedData;
          localStorage.setItem("recipesInfo", JSON.stringify(storedRecipes));
          setData(fetchedData);
        }
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        setError(error);
      }
    };
    getData();
  }, [url, id]);

  return { data, isLoading, error };
};
