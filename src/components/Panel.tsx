

import Word from './Word';

export default function Panel() {
    return(
        <div className='w-96 h-56 border-2 border-b-8 border-r-8 border-slate-800 rounded-xl overflow-hidden'>
            <section className='flex justify-center content-center p-1 text-1xl font-bold text-center text-white bg-slate-800'>
                <p className='w-full text-center'>Adivinhe a palavra:</p>
            </section>
            <Word />
        </div>
    )
}