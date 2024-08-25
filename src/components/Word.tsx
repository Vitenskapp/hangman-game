
import { useState, useEffect } from 'react';

export default function Word() {
    const [word, setWord] = useState<string>("");
    const letters = word ? word.split("") : null;
    const url : string= "https://api.dicionario-aberto.net/random";

    const fetchApiData = async () => {
        const response = await fetch(url)
                         .then(response => response.json())
                         .then(data => setWord(data.word))
                         .catch(error => console.log(error));
    }

    useEffect(() => {
            fetchApiData();
    }, [])
     

    return(
        <div className='h-44 w-full flex justify-center items-center gap-[2%]'>
            {letters ? letters.map((el, index) => {
                return <p className="border-2 border-r-4 border-b-4 border-gray-200 rounded-lg size-9 flex justify-center items-center" key={index}>{el}</p>
            }) : "loading..."}
        </div>
    )
}