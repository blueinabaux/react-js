import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const[ques,setques] = useState(null);
    const[text,setText] = useState([]);
    const [isPending,setisPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                // console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch data from the Resourse ! ');
                    }
                    return res.json();
            })
            .then(data => {
                setques(data);
                setisPending(false);
                setError(null);
                // console.log(data);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message);
            })
        },1000)
    }, [url])

    return {ques,text,setText,isPending, error};
}
 
export default useFetch;