import { useState } from "react";
import Cards from "./components/LetterCard";
import ThemeSelector from "./components/ThemeSelector";
import ColorSelector from "./components/ColorSelector";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const alphabetColorCombinations = [
    {
      theme: "Calm Learning",
      combinations: [
        {
          backgroundColor: "bg-blue-50",
          textColor: "text-blue-800",
          description: "Soft blue background with deep blue text",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green background with dark green text",
        },
        {
          backgroundColor: "bg-yellow-100",
          textColor: "text-gray-900",
          description: "Light yellow background with dark gray text",
        },
      ],
    },
    {
      theme: "High Contrast",
      combinations: [
        {
          backgroundColor: "bg-white",
          textColor: "text-black",
          description: "Classic black and white for maximum readability",
        },
        {
          backgroundColor: "bg-gray-100",
          textColor: "text-indigo-800",
          description: "Light gray background with deep indigo text",
        },
        {
          backgroundColor: "bg-yellow-50",
          textColor: "text-purple-900",
          description: "Soft yellow background with deep purple text",
        },
      ],
    },
    {
      theme: "Pastel Soft",
      combinations: [
        {
          backgroundColor: "bg-pink-50",
          textColor: "text-pink-900",
          description: "Soft pink background with deep pink text",
        },
        {
          backgroundColor: "bg-blue-100",
          textColor: "text-blue-900",
          description: "Light blue background with deep blue text",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green background with dark green text",
        },
      ],
    },
  ];
  // console.log(alphabetColorCombinations[0].combinations[0].backgroundColor);
  // let cl = alphabetColorCombinations[0].combinations[1];
  // console.log(cl);
  const [selectedTheme, setSelectedTheme] = useState(
    alphabetColorCombinations[0]
  );
  const [selectedColor, setSelectedColor] = useState(
    selectedTheme.combinations[0]
  );

  return (
    <>
      <ThemeSelector
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        alphabetColorCombinations={alphabetColorCombinations}
        setSelectedColor={setSelectedColor}
      />{" "}
      |
      <ColorSelector
        selectedTheme={selectedTheme}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className="flex">
        <Router>
          <Nav />
          <div className="flex-1 p-8">
            <Routes>
              <Route
                path="/"
                element={
                  <Cards
                    selectedColor={selectedColor}
                    marker=""
                    withNames={true}
                  />
                }
              />
              <Route
                path="/fatha"
                element={<Cards selectedColor={selectedColor} marker="ََ" />}
              />
              <Route
                path="/kasrah"
                element={<Cards selectedColor={selectedColor} marker="ِ" />}
              />
              <Route
                path="/dommah"
                element={<Cards selectedColor={selectedColor} marker="َُ" />}
              />
              <Route
                path="/fathatanween"
                element={<Cards selectedColor={selectedColor} marker="ًَ" />}
              />
              <Route
                path="/kasrahtanween"
                element={<Cards selectedColor={selectedColor} marker="ٍ" />}
              />
              <Route
                path="/dommahtanween"
                element={<Cards selectedColor={selectedColor} marker="ٌَ" />}
              />
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
