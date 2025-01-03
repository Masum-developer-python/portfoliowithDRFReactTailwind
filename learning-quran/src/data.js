console.log("data.js");

export const siteTitle =
  "Al Quran learning , developed by RARE academy with Masum";

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
  Letter: {
    name: "",
    title: "বর্ণমালা",
    diacritics: [
      {
        name: "",
        title: "বর্ণমালা",
        symbol: "", // ـَ
        unicode: "",
        description: "Short 'a' sound",
        withNames: true,
        preAlphabetDiacriticsUnicode: ''
      },
    ],
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
        preAlphabetDiacriticsUnicode: ''
      },
      {
        name: "Kasrah",
        title: "যের",
        symbol: "\u0650", // ـِ
        unicode: "U+0650",
        description: "Short 'i' sound",
        preAlphabetDiacriticsUnicode: ''
      },
      {
        name: "Dhammah",
        title: "পেশ",
        symbol: "\u064F", // ـُ
        unicode: "U+064F",
        description: "Short 'u' sound",
        preAlphabetDiacriticsUnicode: ''
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
        preAlphabetDiacriticsUnicode: ''
      },
      {
        name: "KasrahTanween",
        title: "দুই যের",
        symbol: "\u064D", // ـٍ
        unicode: "U+064D",
        description: "Indicates 'in' sound (tanween)",
        preAlphabetDiacriticsUnicode: ''
      },
      {
        name: "DhammahTanween",
        title: "দুই পেশ",
        symbol: "\u064C", // ـٌ
        unicode: "U+064C",
        description: "Indicates 'un' sound (tanween)",
        preAlphabetDiacriticsUnicode: ''
      },
    ],
  },
  'others': {
    title : 'সাকিন & তাশদীদ',
    diacritics: [
      {
        name: "Saakinah",
        title: "সাকিন",
        symbol: "\u0652", // ـْ
        unicode: "U+0652",
        description: "No vowel (silent letter)",
        preAlphabet: 'أ',
        preAlphabetDiacriticsUnicode: 'U+064E',
      },
      {
        name: "AshShaddah",
        title: "তাশদীদ",
        symbol: "\u0651", // ـّ
        unicode: "U+0651",
        description: "Indicates doubling (gemination)",
        preAlphabet: 'أ',
        preAlphabetDiacriticsUnicode: 'U+064E',
      },
    ],
  },
  
};

console.log(arabicDiacritics['others'].diacritics[0].preAlphabetDiacriticsUnicode);
// export const arabicDiacritics = [
//   {
//     name: "",
//     title: "",
//     symbol: "", // ـَ
//     unicode: "",
//     description: "",
//     withNames: true,
//   },
//   {
//     name: "Fathah",
//     title: "যবর",
//     symbol: "\u064E", // ـَ
//     unicode: "U+064E",
//     description: "Short 'a' sound",
//   },
//   {
//     name: "Kasrah",
//     title: "যের",
//     symbol: "\u0650", // ـِ
//     unicode: "U+0650",
//     description: "Short 'i' sound",
//   },
//   {
//     name: "Dhammah",
//     title: "পেশ",
//     symbol: "\u064F", // ـُ
//     unicode: "U+064F",
//     description: "Short 'u' sound",
//   },
//   {
//     name: "Saakinah",
//     title: "সাকিন",
//     symbol: "\u0652", // ـْ
//     unicode: "U+0652",
//     description: "No vowel (silent letter)",
//     withAlphabetBar : true,
//   },
//   {
//     name: "AshShaddah",
//     title: "তাশদীদ",
//     symbol: "\u0651", // ـّ
//     unicode: "U+0651",
//     description: "Indicates doubling (gemination)",
//     withAlphabetBar : true,

//   },
//   {
//     name: "FathahTanween",
//     title: "দুই যবর",
//     symbol: "\u064B", // ـً
//     unicode: "U+064B",
//     description: "Indicates 'an' sound (tanween)",
//   },
//   {
//     name: "KasrahTanween",
//     title: "দুই যের",
//     symbol: "\u064D", // ـٍ
//     unicode: "U+064D",
//     description: "Indicates 'in' sound (tanween)",
//   },
//   {
//     name: "DhammahTanween",
//     title: "দুই পেশ",
//     symbol: "\u064C", // ـٌ
//     unicode: "U+064C",
//     description: "Indicates 'un' sound (tanween)",
//   },
// ];

// export const routes = [
//   { name: '', description: 'No diacritic', unicode: '' },
//   { name: 'Fathah', description: 'Short vowel a', unicode: '064E' },
//   { name: 'Kasrah', description: 'Short vowel i', unicode: '0650' },
//   { name: 'Dhammah', description: 'Short vowel u', unicode: '064F' },
//   { name: 'FathahTanween', description: 'Nasal a', unicode: '064B' },
//   { name: 'KasrahTanween', description: 'Nasal i', unicode: '064D' },
//   { name: 'DhammahTanween', description: 'Nasal u', unicode: '064C' }
// ];

//         none : [''],
//         harakaat : [],
//         tanween : [],
//         madd : [],
//         saakinah : [],
//         ashshaddah : [],

// ]
//console.log(arabicDiacritics.findIndex((d)=>d.name=='Fatha'));
// console.log(arabicDiacritics[arabicDiacritics.findIndex((d)=>d.name=='Fatha')]).unicode;
//console.log(arabicDiacritics[arabicDiacritics.findIndex((d)=>d.name=='Kasra')].unicode.slice(2));
//arabicDiacritics : arabicDiacritics[arabicDiacritics.findIndex((d)=>d.name=='Fatha')],

// {
//   name: "Madd",
//   symbol: "\u0653", // ـٓ
//   unicode: "U+0653",
//   description: "Prolongation of vowel sound",
// },
// {
//   name: "Hamza Above",
//   symbol: "\u0623", // أ
//   unicode: "U+0623",
//   description: "Glottal stop with short 'a'",
// },
// {
//   name: "Hamza Below",
//   symbol: "\u0625", // إ
//   unicode: "U+0625",
//   description: "Glottal stop with short 'i'",
// },
