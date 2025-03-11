import { useState, useEffect } from "react";
import Cards from "./components/LetterCard";
import Nav from "./components/Nav";
import SideBar from "./components/sideBar";
import Words from "./components/Words";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { siteTitle, alphabetColorCombinations, arabicDiacritics, receiveDataFromDjango } from "./data";
import Table from "./components/letterRow";
import Blog from "./components/Blog";

function App() {
  console.log("App.jsx");

  const [arabicAlphabet, setArabicAlphabet] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await receiveDataFromDjango("http://localhost:8000/quran/arabic-alphabets/");
      setArabicAlphabet(data);  // ✅ Update state with fetched data
    }
    fetchData();
  }, []);

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

  return (
    <>
      <div className="flex w-[98%]">
        <Nav
          selectedColor={selectedColor}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setSelectedColor={setSelectedColor}
          alphabetColorCombinations={alphabetColorCombinations}
        />

        <Router>
          <main className="flex-1 flex max-w-">
            <Routes>
              <Route
                key={0}
                path={`/`}
                element={
                  <Cards
                    selectedColor={selectedColor}
                    withHoverChildren={true}
                    arabicAlphabet = {arabicAlphabet}
                  />
                }
              />
              <Route
                key={1}
                path={`/tables`}
                element={<Table selectedColor={selectedColor} arabicAlphabet = {arabicAlphabet} />}
              />
              <Route
                key={2}
                path={`/words`}
                element={<Words selectedColor={selectedColor} />}
              />
              {Object.keys(arabicDiacritics).map((category) =>
                arabicDiacritics[category].diacritics.map((route, index) => (
                  <>
                    <Route
                      key={`${index}0`}
                      path={`/${category.toLowerCase()}`}
                      element={<Blog selectedColor={selectedColor} />}
                    />
                    <Route
                      key={`${index}1`}
                      path={`/${category.toLowerCase()}/${route.name.toLowerCase()}`}
                      element={
                        <Cards
                          arabicAlphabet = {arabicAlphabet}
                          selectedColor={selectedColor}
                          arabicAlphabetDiacritics={route.unicode.slice(2)}
                          withNames={route.withNames}
                          title={route.title}
                          isSaakinah={
                            route.name.toLowerCase() === "ashshaddah" ||
                            route.name.toLowerCase() === "saakinah"
                          }
                          isSaddah={route.name.toLowerCase() === "ashshaddah"}
                        />
                      }
                    />
                    {(route.pages || []).map((page, pageIndex) => (
                      <Route
                        key={`${category}-${index}-${pageIndex}-page`}
                        path={`/${category.toLowerCase()}/${route.name.toLowerCase()}${page.name.toLowerCase()}`}
                        element={
                          <Table
                            arabicAlphabet = {arabicAlphabet}
                            selectedColor={selectedColor}
                            title={page.title}
                            diacritics = {route.name.toLowerCase()}
                          />
                        }
                      />
                    ))}
                  </>
                ))
              )}
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
