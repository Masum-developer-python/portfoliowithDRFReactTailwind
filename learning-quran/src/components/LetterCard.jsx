import React from "react";
import {title,arabicAlphabet,arabicAlphabetNames} from "../data";

function Cards({ selectedColor, arabicDiacritics = "", withNames = false }) {
  
  let rowIndex = 0;
  return (
    <>
    <h1 className="text-center text-4xl"> {title} <br></br> আরবী বর্ণমালা {arabicDiacritics && ('-'+ String.fromCodePoint(parseInt(arabicDiacritics, 16)) + '  দিয়ে')}</h1>
      <div
        key={rowIndex}
        className="flex flex-wrap flex-row-reverse w-[100%] space-x-1 m-4 "
      >
        {arabicAlphabet.map((item, itemIndex) => (
          <div
            key={`container-${rowIndex}-${itemIndex}`}
            className=" group flex-grow"
          >
            <div
              key={`item-${rowIndex}-${itemIndex}`}
              className={`rtl p-10 m-1 h-[200px] ${
                withNames ? "hover:text-8xl" : ""
              }
            ${selectedColor.backgroundColor} 
            text-8xl text-center 
            ${selectedColor.textColor} rounded-lg`}
            >
              {item }{arabicDiacritics && (String.fromCodePoint(parseInt(arabicDiacritics, 16)))}

              {withNames && (
                <div
                  key={`itemName-${rowIndex}-${itemIndex}`}
                  className="text-5xl text-left opacity-0 group-hover:opacity-100"
                >
                  {arabicAlphabetNames[itemIndex]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* ))} */}
    </>
  );
}
export default Cards;
