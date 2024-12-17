import React from "react";
function Cards({ selectedColor, marker = "", withNames = false }) {
  const arabicAlphabet = [
    "أ", // Alif with Hamza
    "ب", // Baa
    "ت", // Taa
    "ث", // Thaa
    "ج", // Jeem
    "ح", // Haa
    "خ", // Khaa
    "د", // Dal
    "ذ", // Thal
    "ر", // Raa
    "ز", // Zayn
    "س", // Seen
    "ش", // Sheen
    "ص", // Sad
    "ض", // Dad
    "ط", // Taa
    "ظ", // Zaa
    "ع", // Ayn
    "غ", // Ghayn
    "ف", // Faa
    "ق", // Qaf
    "ك", // Kaf
    "ل", // Lam
    "م", // Meem
    "ن", // Noon
    "ه", // Haa
    "و", // Waw
    "ي", // Yaa
  ];
  const arabicAlphabetNames = [
    "أَلِف",
    "بَاء",
    "تَاء",
    "ثَاء",
    "جِيم",
    "حَاء",
    "خَاء",
    "دَال",
    "ذَال",
    "رَاء",
    "زَاي",
    "سِين",
    "شِين",
    "صَاد",
    "ضَاد",
    "طَاء",
    "ظَاء",
    "عَين",
    "غَين",
    "فَاء",
    "قَاف",
    "كَاف",
    "لَام",
    "مِيم",
    "نُون",
    "هَاء",
    "وَاو",
    "يَاء",
  ];
  let rowIndex = 0;
  return (
    <>
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
              {item + marker}

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
