import { useState } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Alphabet = () => {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutput = outputString + letter;

    newOutput = newOutput.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newOutput);
  };

  return (
    <div className="flex  justify-center h-[calc(100vh-260px)] gap-12">
      <div className="grid grid-cols-5 gap-x-4  w-[60%]">
        {alphabet?.map((letter, index) => (
          <div
            y
            key={index}
            className="flex text-xl font-semibold justify-center items-center h-16 bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300 rounded-md user-select-none"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className=" w-[40%] p-5 rounded-md bg-gray-100 overflow-auto">
        <h3 className="text-2xl font-bold text-center underline">Output</h3>{" "}
        <div className="mt-5 text-xl font-semibold">{outputString}</div>
      </div>
    </div>
  );
};

export default Alphabet;
