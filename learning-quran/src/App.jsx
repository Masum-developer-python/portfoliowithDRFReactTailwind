import { useState, useEffect } from "react";
import Cards from "./components/LetterCard";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { alphabetColorCombinations, arabicDiacritics} from "./data";

function App() {
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
  console.log(
    arabicDiacritics[
      arabicDiacritics.findIndex((d) => d.name == "Kasrah")
    ].unicode.slice(2)
  );

  return (
    <>
      <div className="flex">
        <Nav
          selectedColor={selectedColor}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setSelectedColor={setSelectedColor}
          alphabetColorCombinations={alphabetColorCombinations}
        />

        <Router>
          <div className="flex-1 p-8">
            <Routes>
            {arabicDiacritics.map((route, index) => (
            <Route
              key={index}
              path={`/${route.name.toLowerCase()}`} // Use name for the path
              element={
                <Cards
                  selectedColor={selectedColor}
                  // description={route.description}
                  arabicDiacritics={route.unicode.slice(2)}
                />
              }
            />
          ))}
            </Routes>
          </div>
        </Router>
        {/* <Cards selectedColor={selectedColor} marker="َ"/> */}

        {/* <QApp /> */}
      </div>{" "}
    </>
  );
}
export default App;

`<Route
                path="/"
                element={
                  <Cards
                    selectedColor={selectedColor}
                    arabicDiacritics=""
                    withNames={true}
                  />
                }
              />
              {/* <Route
                path="/fatha"
                element={<Cards selectedColor={selectedColor} marker="ََ" />}
              /> */}
              <Route
                path="/fatha"
                element={<Cards selectedColor={selectedColor} arabicDiacritics="064E" />}
              />
              <Route
                path="/kasrah"
                element={<Cards selectedColor={selectedColor} arabicDiacritics={arabicDiacritics[arabicDiacritics.findIndex((d)=>d.name=='Kasrah')].unicode.slice(2)} />}
              />
              <Route
                path="/dommah"
                element={<Cards selectedColor={selectedColor} arabicDiacritics="064E" />}
              />
              <Route
                path="/fathatanween"
                element={<Cards selectedColor={selectedColor} arabicDiacritics="064E" />}
              />
              <Route
                path="/kasrahtanween"
                element={<Cards selectedColor={selectedColor} arabicDiacritics="064E" />}
              />
              <Route
                path="/dommahtanween"
                element={<Cards selectedColor={selectedColor} arabicDiacritics="064E" />}
              />`;
