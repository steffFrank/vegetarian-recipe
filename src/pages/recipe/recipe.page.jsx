import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export const Recipe = () => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
    const { id } = useParams();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async (url) => {

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
        getData(`${baseUrl}${id}/information?${apiQuery}`);
    }, []);

    if (error) {
        return <div>error...</div>;
    }

    return (
      isLoading ? <div>loading...</div> : <section>
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <span>Ready in {data.readyInMinutes} minutes</span>
            <span>{data.servings} servings</span>
            <div><h2>Diet</h2>
                {data.diets.map((diet, index) => {
                return <li key={index}>{diet}</li>})}</div>
            <div><h2>Ingredients</h2>
                {data.extendedIngredients.map(ing => {
                return <li key={ing.id}>{ing.name} - <span>{ing.amount} {ing.unit}</span></li>
            })}</div>
            <div>
                <h2>Instructions</h2>
                {data.analyzedInstructions[0].steps.map(step => {
                    return (<div key={step.number}>
                        <h3>Step {step.number}</h3>
                        <p>{step.step}</p>
                    </div>)
                })}
            </div>
        </section>
    )
}