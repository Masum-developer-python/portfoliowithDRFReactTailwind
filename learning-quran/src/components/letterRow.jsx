// src/components/ArabicWordsTable.js
import React, { useState, useEffect } from "react";
import { arabicAlphabet, sendDataToDjango, receiveDataFromDjango } from "../data";
import Words from "./Words";

const Table = ({ selectedColor, arabicAlphabet , diacritics}) => {
  const [sendingWord, setSendingWord] = useState("");
  console.log("letterRow.jsx");
  console.log(sendingWord);
  console.log(arabicAlphabet);
  const positions = ['end', 'middle', 'start'];

  const [arabicWords, setArabicWords] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await receiveDataFromDjango("http://localhost:8000/quran/arabic-words/");
      setArabicWords(data);  // ✅ Update state with fetched data
    }
    fetchData();
  }, []);

  console.log(arabicWords);
  //console.log(arabicWords.find(item => (item.diacritics === diacritics)));
  //console.log(arabicWords.find(item => (item.diacritics === diacritics && item.position === positions[2] && item.letter === 1 )));
  return (
    <div className="container mx-auto p-4 ml-[250px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Words with {diacritics}</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">শেষে</th>
            <th className="py-2 px-4 border-b border-gray-300">মধ্যে</th>
            <th className="py-2 px-4 border-b border-gray-300">শুরুতে</th>
            <th className="py-2 px-4 border-b border-gray-300">হরফ</th>
          </tr>
        </thead>
        <tbody>
          {arabicAlphabet.map((row, rowIndex) => (
            <>
              <tr key={`${rowIndex}-`} className={"bg-white"}>
                <td className="py-2 px-4 border border-gray-300 text-center text-8xl">
                {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[0] && item.letter == row.id)?.word ||
                 (<>
                  <Words
                    selectedColor={selectedColor}
                    sendingWord={sendingWord}
                    setSendingWord={setSendingWord}
                    arabicAlphabet = {arabicAlphabet}
                  />
                  <button className="bg-gray-300"
                    onClick={() =>
                      sendDataToDjango(
                        {
                            "diacritics": diacritics,
                            "position": positions[0],
                            "word": sendingWord,
                            "bangla": "",
                            "english": "",
                            "parts_of_speech": "",
                            "letter": row.id
                        }, // Data to send
                        "http://localhost:5000/quran/arabic-words/" // URL
                      )
                    }
                  >
                  {row.id}{diacritics}{positions[0]}
                  </button>
                 </>)}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center text-8xl">
                {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[1] && item.letter == row.id)?.word ||
                 (<>
                  <Words
                    selectedColor={selectedColor}
                    sendingWord={sendingWord}
                    setSendingWord={setSendingWord}
                    arabicAlphabet = {arabicAlphabet}
                  />
                  <button className="bg-gray-300"
                    onClick={() =>
                      sendDataToDjango(
                        {
                            "diacritics": diacritics,
                            "position": positions[1],
                            "word": sendingWord,
                            "bangla": "",
                            "english": "",
                            "parts_of_speech": "",
                            "letter": row.id
                        }, // Data to send
                        "http://localhost:5000/quran/arabic-words/" // URL
                      )
                    }
                  >
                  {row.id}{diacritics}{positions[1]}
                  </button>
                 </>)}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center text-8xl">
                {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[2] && item.letter == row.id)?.word ||
                 (<>
                  <Words
                    selectedColor={selectedColor}
                    sendingWord={sendingWord}
                    setSendingWord={setSendingWord}
                    arabicAlphabet = {arabicAlphabet}
                  />
                  <button className="bg-gray-300"
                    onClick={() =>
                      sendDataToDjango(
                        {
                            "diacritics": diacritics,
                            "position": positions[2],
                            "word": sendingWord,
                            "bangla": "",
                            "english": "",
                            "parts_of_speech": "",
                            "letter": row.id
                        }, // Data to send
                        "http://localhost:5000/quran/arabic-words/" // URL
                      )
                    }
                  >
                  {row.id}{diacritics}{positions[2]}
                  </button>
                 </>)}
                </td>
                <td className="py-2 px-4 border-t border-gray-300 text-6xl text-center row-span-2">
                  {" "}
                  {row.alphabet}
                </td>
              </tr>
              <tr key={rowIndex} className={"bg-red"}>
                <td className="py-2 px-4 border border-gray-300 text-6xl text-center bg-gray-300">
                  {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[0] && item.letter == row.id)?.word || '---'}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-6xl text-center bg-gray-300">
                {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[1] && item.letter == row.id)?.word || '---'}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-6xl text-center bg-gray-300">
                {arabicWords.find(item => item.diacritics === diacritics && item.position === positions[2] && item.letter == row.id)?.word || '---'}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
