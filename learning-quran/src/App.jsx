import { useState, useEffect } from "react";
import Cards from "./components/LetterCard";
import Nav from "./components/Nav";
import SideBar from "./components/sideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { siteTitle, alphabetColorCombinations, arabicDiacritics } from "./data";

function App() {
  console.log("App.jsx");
  // Initialize state from localStorage or default values
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const saved = localStorage.getItem("arabic-app-theme");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return alphabetColorCombinations[1];
      }
    }
    return alphabetColorCombinations[1];
  });
  const [selectedColor, setSelectedColor] = useState(() => {
    const saved = localStorage.getItem("arabic-app-color");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return selectedTheme.combinations[0];
      }
    }
    return selectedTheme.combinations[0];
  });

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("arabic-app-theme", JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  // Save to localStorage when color changes
  useEffect(() => {
    localStorage.setItem("arabic-app-color", JSON.stringify(selectedColor));
  }, [selectedColor]);
  //console.log(arabicDiacritics);
  return (
    <>
      {/* <div
        className={`flex  justify-center items-center space-x-4 text-center text-2xl w-[100%] m-2 max-h-[150px] ${selectedColor.backgroundColor} ${selectedColor.textColor}`}
      >
        {" "}
        {siteTitle} <br></br>{" "}
      </div> */}
      <div className="flex w-[98%]">
        <Nav
          selectedColor={selectedColor}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setSelectedColor={setSelectedColor}
          alphabetColorCombinations={alphabetColorCombinations}
        />

        <Router>
          <main className="flex-1 flex">
            <Routes>
              <Route
                key={0}
                path={`/`} // Use name for the path
                element={
                  <Cards
                    selectedColor={selectedColor}
                    // Pass the unicode part after 'U+'
                    withNames={true}
                  />
                }
              />
              
              {Object.keys(arabicDiacritics).map((category) =>
                arabicDiacritics[category].diacritics.map((route, index) => (
                  <Route
                    key={index}
                    path={`/${category}/${route.name.toLowerCase()}`} // Use name for the path
                    element={
                      <Cards
                        selectedColor={selectedColor}
                        arabicAlphabetDiacritics={route.unicode.slice(2)} // Pass the unicode part after 'U+'
                        withNames={route.withNames}
                        title={route.title}
                        withPreAlphabet={route.preAlphabet}
                        preAlphabetDiacriticsUnicode = {route.preAlphabetDiacriticsUnicode.slice(2)}
                        isSaddah = { route.name.toLowerCase()=='ashshaddah' ? true : false}
                      />
                    }
                  />
                ))
              )}
            </Routes>
          </main>
        </Router>
        {/* <SideBar selectedColor={selectedColor} /> */}
      </div>
    </>
  );
}
export default App;
