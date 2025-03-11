import React, { useState, useEffect } from "react";
import {
  siteTitle,
  //arabicAlphabet,
  //arabicAlphabetNames,
  arabicDiacritics,
  sendDataToDjango,
  receiveDataFromDjango
} from "../data";
import SideBar from "./sideBar";

function Cards({
  arabicAlphabet,
  selectedColor,
  arabicAlphabetDiacritics = "",
  withHoverChildren = false,
  isSaddah = false,
  isSaakinah = false,
  title,
}) {
  const [preAlphabetDiacriticsUnicode, setPreAlphabetDiacriticsUnicode] =
    useState("");
  const [preAlphabet, setPreAlphabet] = useState("");
  const [postAlphabetDiacriticsUnicode, setPostAlphabetDiacriticsUnicode] =
    useState("");
  
  let rowIndex = 0;
  
  
  console.log("LetterCard.jsx");
  console.log(arabicAlphabet);
  //console.log(isSaddah);
  // console.log(arabicDiacritics["Harakat"].diacritics[0].unicode);
  // console.log(preAlphabetDiacriticsUnicode);
  return (
    <>
      <div key={rowIndex} className="flex flex-wrap  w-[100%] space-x-1 m-4 ">
        <div className="flex flex-0 flex-wrap flex-row-reverse w-[100%] space-x-1 m-4 ">
          {arabicAlphabet.map((item, itemIndex) => (
            <div
              key={`container-${rowIndex}-${itemIndex}`}
              className=" group flex-grow"
            >
              <div
                key={`item-${rowIndex}-${itemIndex}`}
                className={`rtl p-10 m-1 w-auto h-auto
            ${selectedColor.backgroundColor} 
            text-8xl text-center 
            ${selectedColor.textColor} rounded-lg`}
              >
                {preAlphabet && preAlphabet}
                {preAlphabet &&
                  preAlphabetDiacriticsUnicode &&
                  String.fromCodePoint(
                    parseInt(preAlphabetDiacriticsUnicode, 16)
                  )}

                {item.alphabet}
                {arabicAlphabetDiacritics &&
                  String.fromCodePoint(parseInt(arabicAlphabetDiacritics, 16))}
                {postAlphabetDiacriticsUnicode &&
                  String.fromCodePoint(
                    parseInt(postAlphabetDiacriticsUnicode, 16)
                  )}

                {withHoverChildren && (
                  <div
                    key={`itemName-${rowIndex}-${itemIndex}`}
                    className="text-5xl text-left opacity-0 group-hover:opacity-100"
                  >
                    {item.alphabet_name}
                  </div>
                )}
              </div>
              {/* <button
                onClick={() =>
                  sendDataToDjango(
                    { alphabet: item, alphabet_name: arabicAlphabetNames[itemIndex] }, // Data to send
                    "http://localhost:5000/quran/arabic-alphabets/" // URL
                  )
                }
              >
                +
              </button> */}
            </div>
          ))}
        </div>
        <div
          className={`flex  justify-center items-center space-x-4 text-center text-2xl w-[100%] m-2 max-h-[150px] ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
        >
          {" "}
          {siteTitle} <br></br>{" "}
          <span className="text-3xl">
            {title}{" "}
            {arabicAlphabetDiacritics &&
              "-" +
                String.fromCodePoint(parseInt(arabicAlphabetDiacritics, 16)) +
                "  দিয়ে"}
          </span>
        </div>
      </div>
      {/* ))} */}
      <aside>
        {isSaakinah && (
          <SideBar
            selectedColor={selectedColor}
            preAlphabetDiacriticsUnicode={preAlphabetDiacriticsUnicode}
            setPreAlphabetDiacriticsUnicode={setPreAlphabetDiacriticsUnicode}
            preAlphabet={preAlphabet}
            setPreAlphabet={setPreAlphabet}
            postAlphabetDiacriticsUnicode={postAlphabetDiacriticsUnicode}
            setPostAlphabetDiacriticsUnicode={setPostAlphabetDiacriticsUnicode}
            isSaddah={isSaddah}
          />
        )}
      </aside>
    </>
  );
}
export default Cards;
