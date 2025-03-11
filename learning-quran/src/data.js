console.log("data.js");

export const siteTitle =
  "Al  Quran  learning , developed by RARE academy with Masum";

export const alphabetColorCombinations = [
  {
    theme: "Calm Learning",
    combinations: [
      {
        backgroundColor: "bg-blue-50",
        textColor: "text-blue-800",
        description: "Soft blue & deep blue",
      },
      {
        backgroundColor: "bg-green-50",
        textColor: "text-green-900",
        description: "Pale green & dark green",
      },
      {
        backgroundColor: "bg-yellow-100",
        textColor: "text-gray-900",
        description: "Light yellow & dark gray",
      },
    ],
  },
  {
    theme: "High Contrast",
    combinations: [
      {
        backgroundColor: "bg-white",
        textColor: "text-black",
        description: "Classic black & white",
      },
      {
        backgroundColor: "bg-gray-100",
        textColor: "text-indigo-800",
        description: "Light gray & deep indigo",
      },
      {
        backgroundColor: "bg-yellow-50",
        textColor: "text-purple-900",
        description: "Soft yellow & deep purple",
      },
    ],
  },
  {
    theme: "Pastel Soft",
    combinations: [
      {
        backgroundColor: "bg-pink-50",
        textColor: "text-pink-900",
        description: "Soft pink & deep pink",
      },
      {
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-900",
        description: "Light blue & deep blue",
      },
      {
        backgroundColor: "bg-green-50",
        textColor: "text-green-900",
        description: "Pale green & dark green",
      },
    ],
  },
];
// console.log(alphabetColorCombinations[0].combinations[0].backgroundColor);
// let cl = alphabetColorCombinations[0].combinations[1];
// console.log(cl);

export const arabicAlphabet = [
  "ا", // Alif with Hamza
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
export const arabicAlphabetNames = [
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

export const arabicDiacritics = {
  "": {
    title: "বর্ণমালা",
    diacritics: [],
  },
  Harakat: {
    title: "হরকত",
    diacritics: [
      {
        name: "Fathah",
        title: "যবর",
        symbol: "\u064E", // ـَ
        unicode: "U+064E",
        description: "Short 'a' sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "Kasrah",
        title: "যের",
        symbol: "\u0650", // ـِ
        unicode: "U+0650",
        description: "Short 'i' sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "Dhammah",
        title: "পেশ",
        symbol: "\u064F", // ـُ
        unicode: "U+064F",
        description: "Short 'u' sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
    ],
  },

  Tanween: {
    title: "তানভীন",
    diacritics: [
      {
        name: "FathahTanween",
        title: "দুই যবর",
        symbol: "\u064B", // ـً
        unicode: "U+064B",
        description: "Indicates 'an' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "KasrahTanween",
        title: "দুই যের",
        symbol: "\u064D", // ـٍ
        unicode: "U+064D",
        description: "Indicates 'in' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "DhammahTanween",
        title: "দুই পেশ",
        symbol: "\u064C", // ـٌ
        unicode: "U+064C",
        description: "Indicates 'un' sound (tanween)",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
    ],
  },
  Madd: {
    title: "মদ",
    diacritics: [
      {
        name: "Alif Madd",
        title: "আলিফ মদ / খাড়া যবর",
        symbol: "\u0657", // ـٰ
        unicode: "U+0670",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "Yaa Madd",
        title: "ইয়া মদ / খাড়া যের",
        symbol: "\u0656", // ـٰ
        unicode: "U+0656",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
      {
        name: "Waao Madd",
        title: "ওয়াও মদ / উল্টা পেশ",
        symbol: "\u0657", // ـٰ
        unicode: "U+0657",
        description: "Represents a prolonged vowel sound",
        pages: [
          {
            name: "Words",
            title: "শব্দ",
          },
        ],
      },
    ],
  },

  others: {
    title: "সাকিন & তাশদীদ",
    diacritics: [
      {
        name: "Saakinah",
        title: "সাকিন",
        symbol: "\u0652", // ـْ
        unicode: "U+0652",
        description: "No vowel (silent letter)",
        pages: [],
      },
      {
        name: "AshShaddah",
        title: "তাশদীদ",
        symbol: "\u0651", // ـّ
        unicode: "U+0651",
        description: "Indicates doubling (gemination)",
        pages: [],
      },
    ],
  },
};

export async function sendDataToDjango(sdata,address) {
  try {
    const response = await fetch(
      address,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sdata),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Data sent successfully:", result);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}


export async function receiveDataFromDjango(address) {
  try {
    const response = await fetch(
      address
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
    console.log("Data sent successfully:", result);
  } catch (error) {
    console.error("Error sending data:", error);
    return null;
  }
}