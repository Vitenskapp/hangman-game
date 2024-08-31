import React from 'react';

// Define the type for the props
type KeyboardProps = {
    handleKeyPress: (evt: React.MouseEvent<HTMLButtonElement>) => string; // The typed function returned in components props
};

const Keyboard: React.FC<KeyboardProps> = ({ handleKeyPress }) => {
    const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="flex gap-2 row-wrap justify-center items-center flex-wrap h-20 w-96">
            {alphabet.map((el, index) => (
                <button
                    className="border-2 border-r-4 border-b-4 rounded-lg border-slate-700 flex justify-center items-center w-8 h-8 padding-2"
                    key={index}
                    onClick={(evt) => handleKeyPress(evt)} // Return the letter into the button
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;