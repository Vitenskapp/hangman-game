export default function Keyboard() {

   const alphabet = ["A", "B", "C"]

    return(
        <div className="flex gap-2 row-wrap justify-center items-center">
            {alphabet.map((el, index) => {
                return <button className="border-2 border-r-4 border-b-4 rounded-lg border-slate-700 flex justify-center items-center w-8 h-8 padding-2" key="index">{el}</button>
            })}
        </div>
    )
}