import React, { useState } from "react";
import {
  siteTitle,
  arabicAlphabet,
  arabicAlphabetNames,
  arabicDiacritics,
} from "../data";
import SideBar from "./sideBar";

function Cards({
  selectedColor,
  arabicAlphabetDiacritics = "",
  withNames = false,
  withPreAlphabet = "",
  isSaddah = false,
  title,
}) {
  const [preAlphabetDiacriticsUnicode, setPreAlphabetDiacriticsUnicode] =
    useState("");
  const [preAlphabet, setPreAlphabet] = useState("");
  const [postAlphabetDiacriticsUnicode, setPostAlphabetDiacriticsUnicode] =
    useState("");
  let rowIndex = 0;
  console.log("LetterCard.jsx");
  //console.log(isSaddah);
  // console.log(arabicDiacritics["Harakat"].diacritics[0].unicode);
  // console.log(preAlphabetDiacriticsUnicode);
  return (
    <>
      <div key={rowIndex} className="flex flex-wrap  w-[100%] space-x-1 m-4 ">
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
        <div className="flex flex-0 flex-wrap flex-row-reverse w-[100%] space-x-1 m-4 ">
          {arabicAlphabet.map((item, itemIndex) => (
            <div
              key={`container-${rowIndex}-${itemIndex}`}
              className=" group flex-grow"
            >
              <div
                key={`item-${rowIndex}-${itemIndex}`}
                className={`rtl p-10 m-1 w-auto h-auto ${
                  withNames ? "hover:text-8xl" : ""
                }
            ${selectedColor.backgroundColor} 
            text-8xl text-center 
            ${selectedColor.textColor} rounded-lg`}
              >
                {preAlphabet && preAlphabet}
                {preAlphabetDiacriticsUnicode &&
                  String.fromCodePoint(
                    parseInt(preAlphabetDiacriticsUnicode, 16)
                  )}

                {item}
                {arabicAlphabetDiacritics &&
                  String.fromCodePoint(parseInt(arabicAlphabetDiacritics, 16))}
                {postAlphabetDiacriticsUnicode &&
                  String.fromCodePoint(
                    parseInt(postAlphabetDiacriticsUnicode, 16)
                  )}

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
      </div>
      {/* ))} */}
      <aside>
        {withPreAlphabet && (
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
