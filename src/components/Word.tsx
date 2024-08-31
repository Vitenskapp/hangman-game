import { useState, useEffect } from 'react';
    
type fetchApiDataType = {
    fetchApiData: () => Promise<string[]>;
};

const Word: React.FC<fetchApiDataType> = ({ fetchApiData }) => {
const [letters, setLetters] = useState<string[] | null>(null);

useEffect(() => {
        const fetchData = async () => {
        const data = await fetchApiData();
        setLetters(data);
    };

    fetchData();
}, []);

return (
    <div className="h-44 w-full flex justify-center items-center gap-[2%]">
    {letters ? (
        letters.map((el, index) => (
        <p
            className="border-2
            border-r-4
            border-b-4 
            border-gray-200
            rounded-lg size-9
            flex
            justify-center
            items-center"

            key={index}
        >
            {el}
        </p>
        ))
    ) : (
        "loading..."
    )}
    </div>
);
};

export default Word;
  