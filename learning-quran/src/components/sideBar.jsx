import { arabicAlphabet, arabicDiacritics } from "../data";
function SideBar({
  selectedColor = {
    backgroundColor: "bg-blue-50",
    textColor: "text-blue-800",
    description: "Soft blue & deep blue",
  },
  isSaddah = false,
  isAllDiacritics = false,
  preAlphabetDiacriticsUnicode,
  setPreAlphabetDiacriticsUnicode,
  preAlphabet,
  setPreAlphabet,
  postAlphabetDiacriticsUnicode,
  setPostAlphabetDiacriticsUnicode,
  word,
  setWord,
  children
}) {
  console.log("SideBar.jsx");
  console.log(word);

  //console.log(isSaddah);
  //console.log(alphabetColorCombinations);
  let rowIndex = 0;
  const ringColor = `focus:ring-${selectedColor.textColor.slice(4)}`;
  return (
    <div key={rowIndex} className="flex w-64  ">
      <div className="flex flex-row h-[250px]"></div>
      <div>
        {arabicAlphabet.slice(0,14).map((item, itemIndex) => (
          <button
            onClick={() => {
              setPreAlphabet(item);
              setWord((prev) => prev + item);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[2px] w-16
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {arabicAlphabet.slice(14).map((item, itemIndex) => (
          <button
            onClick={() => {
              setPreAlphabet(item);
              setWord((prev) => prev + item);
            }}
            key={`item-${rowIndex}-${itemIndex}`}
            className={`rtl p-4 m-1 mb-0 h-[2px] w-16
          ${selectedColor.backgroundColor} 
          text-xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {!isAllDiacritics && (
          <div>
            {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() =>
                  setPreAlphabetDiacriticsUnicode(item.unicode.slice(2))
                }
                className={`rtl p-4 m-1 mb-0 h-[40px] w-16 bg-gray-300
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
          </div>
        )}

        {(isSaddah || isAllDiacritics) && (
          <div >
            {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[40px] w-16 
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
            {arabicDiacritics["Tanween"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
            {arabicDiacritics["Madd"].diacritics.map((item, itemIndex) => (
              <button
                key={`item-${rowIndex}-${itemIndex}`}
                onClick={() => {
                  const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                  setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                  // Directly use the value of unicodeValue to append to the word
                  setWord(
                    (prev) =>
                      prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                  );
                }}
                className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
              >
                {"-" +
                  String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
              </button>
            ))}
            {isAllDiacritics &&(
              arabicDiacritics["others"].diacritics.map((item, itemIndex) => (
                <button
                  key={`item-${rowIndex}-${itemIndex}`}
                  onClick={() => {
                    const unicodeValue = item.unicode.slice(2); // Get the Unicode value
                    setPostAlphabetDiacriticsUnicode(unicodeValue); // Update the postAlphabetDiacriticsUnicode state

                    // Directly use the value of unicodeValue to append to the word
                    setWord(
                      (prev) =>
                        prev + String.fromCodePoint(parseInt(unicodeValue, 16))
                    );
                  }}
                  className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
                >
                  {"-" +
                    String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
                </button>
                
              )))}
              
              {children}
          </div>
        )}
      </div>
    </div>
  );
}
export default SideBar;
