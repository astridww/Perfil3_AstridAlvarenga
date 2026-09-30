import { useEffect, useState } from "react";

export default function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const load = async () => {
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json.results ?? json);
            }catch (e){
                setError(e.message);
            }finally{
                setLoading(false);
            }
        };
        load();
    }, [url]);

    return {data, loading, error};
}