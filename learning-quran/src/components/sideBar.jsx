import { arabicAlphabet, arabicDiacritics } from "../data";
function SideBar({
  selectedColor = {
    backgroundColor: "bg-blue-50",
    textColor: "text-blue-800",
    description: "Soft blue & deep blue",
  },
  isSaddah = false,
  preAlphabetDiacriticsUnicode,
  setPreAlphabetDiacriticsUnicode,
  preAlphabet,
  setPreAlphabet,
  postAlphabetDiacriticsUnicode,
  setPostAlphabetDiacriticsUnicode,
}) {
  console.log("SideBar.jsx");
  //console.log(isSaddah);
  //console.log(alphabetColorCombinations);
  let rowIndex = 0;
  const ringColor = `focus:ring-${selectedColor.textColor.slice(4)}`;
  return (
    <div key={rowIndex} className="flex w-32  ">
      <div className="flex flex-row h-[250px]"></div>
      <div>
        {arabicAlphabet.map((item, itemIndex) => (
          <button
          onClick={()=>setPreAlphabet(item)}
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
        <div>
          <h1>Pre</h1>
          {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
            <button
              key={`item-${rowIndex}-${itemIndex}`}
              onClick={()=>setPreAlphabetDiacriticsUnicode(item.unicode.slice(2))}
              className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
            >
              {"-" + String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
            </button>
          ))}
        </div>
        {isSaddah && (<div>
          <h1>Post</h1>
          {arabicDiacritics["Harakat"].diacritics.map((item, itemIndex) => (
            <button
              key={`item-${rowIndex}-${itemIndex}`}
              onClick={()=>setPostAlphabetDiacriticsUnicode(item.unicode.slice(2))}
              className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
            >
              {"-" + String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
            </button>
          ))}
          {arabicDiacritics["Tanween"].diacritics.map((item, itemIndex) => (
            <button
              key={`item-${rowIndex}-${itemIndex}`}
              onClick={()=>setPostAlphabetDiacriticsUnicode(item.unicode.slice(2))}
              className={`rtl p-4 m-1 mb-0 h-[40px] w-16
          ${selectedColor.backgroundColor} 
          text-4xl text-center 
          ${selectedColor.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `}
            >
              {"-" + String.fromCodePoint(parseInt(item.unicode.slice(2), 16))}
            </button>
          ))}
        </div>)}
      </div>
    </div>
  );
}
export default SideBar;
