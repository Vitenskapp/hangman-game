import Word from './Word';

export default function Panel() {

    const url : string = "https://api.dicionario-aberto.net/random";

    const fetchApiData = async (): Promise<any> => {

        const response = await fetch(url)
                         .then(response => response.json())
                         .then(data => data.word.split(""))
                         .catch(error => console.log(error));

        return response;
        
    }


    return(
        <div className='w-96 h-56 border-2 border-b-8 border-r-8 border-slate-800 rounded-xl overflow-hidden mx-2'>
            <section className='flex justify-center content-center p-1 text-1xl font-bold text-center text-white bg-slate-800'>
                <p className='w-full text-center'>Adivinhe a palavra:</p>
            </section>
            <Word fetchApiData={fetchApiData} />
        </div>
    )
}